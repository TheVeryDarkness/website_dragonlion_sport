<template>
  <p class="text normal">
    有关数据文件格式的问题，详见项目自述文件。编辑完成后，您可以点击“生成”按钮，复制下方的内容或下载生成的JSON文件，然后将其提交到
    <a href="https://github.com/TheVeryDarkness/sport_data/issues">
      GitHub issues
    </a>
    。如果您没有GitHub账号，可以联系
    <a href="mailto:1853308@tongji.edu.cn?subject='Data Update Request.'">
      当前的维护者并将文件链接或内容发给他</a
    >。
  </p>
  <textarea ref="_json" readonly="true" v-html="file" wrap="off"></textarea>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NodeBasic, TreeRoot } from "./tree";
const manage = defineComponent({
  props: {
    data: { type: Object as PropType<TreeRoot>, required: true },
    node: { type: Object as PropType<NodeBasic> },
  },
  computed: {
    file(): string {
      return JSON.stringify(this.data, null, 1);
    },
  },
  watch: {
    node() {
      const _json = this.$refs._json as HTMLTextAreaElement;
      var pos = 0;
      var len = 0;
      var found = false;
      const node = this.node;
      function add() {
        if (!found) ++pos;
        ++len;
      }
      function count(n: NodeBasic) {
        if (node == n) found = true;

        add();
        for (const key in n) {
          const val = n[key];
          if (typeof val == "string") add();
          else {
            if (val)
              val.forEach((element) => {
                if (typeof element == "string") add();
                else if (element instanceof Array) {
                  add();
                  element.forEach(add);
                  if (element.length > 0) add();
                } else count(element);
              });
            else console.log(n);
          }
        }
        add();
      }
      add(), add();
      this.data.root.forEach(count);
      add();
      console.log(pos, len);
      _json.scrollTop = (_json.scrollHeight * pos) / len;
    },
  },
});
export default manage;
</script>

<style scoped>
textarea {
  font-size: inherit;
  width: 100%;
  height: fit-content;
  min-height: 10em;
  resize: vertical;
}
</style>