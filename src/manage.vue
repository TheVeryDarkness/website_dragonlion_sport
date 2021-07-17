<template>
  <p class="text normal">
    提示：由于没有服务器，所以选择通过Github存放视频元数据。编辑完成后，您可以点击“生成”按钮，复制下方的内容或下载生成的JSON文件，然后将其提交到
    <a href="https://github.com/TheVeryDarkness/sport_data/issues">
      GitHub issues
    </a>
    。如果您没有GitHub账号，可以联系
    <a href="mailto:1853308@tongji.edu.cn?subject='Data Update Request.'">
      当前的维护者并将文件链接或内容发给他</a
    >。
  </p>
  <textarea readonly="true" v-html="file" wrap="off"></textarea>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const manage = defineComponent({
  props: { data: { type: Object, required: true } },
  computed: {
    file(): string {
      return JSON.stringify(this.data, null, 1);
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