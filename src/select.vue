<template>
  <fieldset class="top">
    <input type="text" v-model="key" placeholder="字段" size="6" />
    <input type="text" v-model="text" placeholder="关键字" />
    <input type="button" value="搜索" @click="fullSearch()" />
    <input type="button" value="取消" @click="reset()" />
    <input class="button" type="button" value="生成" @click="generate" />
    <div v-if="video && video.root">
      <Tree
        style="margin: 0; padding: 0"
        v-for="root in orderedSub"
        :key="root.value"
        v-bind:root="root"
        v-bind:want="search"
        @choose="chooseNode"
      />
    </div>
  </fieldset>
</template>

<script lang="ts">
import { default as Tree } from "@/tree.vue";
import { NodeBasic, TreeRoot } from "./tree";
import { defineComponent, PropType, reactive } from "vue";
import { compare } from "./compare";

function makeFile(name: string, text: string) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", name);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function searchInText(a: string, b: string): boolean {
  return b.includes(a);
}
function fullSearch(
  text: string,
  _key: string = ""
): (node: NodeBasic) => boolean {
  return function (node: NodeBasic) {
    let key: keyof NodeBasic;
    for (key in node) {
      if (key == "sub") continue;
      if (_key != "" && _key != key) continue;
      const value = node[key];
      if (value)
        if (typeof value == "string") return searchInText(text, value);
        else
          for (const element of value)
            if (typeof element == "string") {
              if (searchInText(text, element)) return true;
            } else if (element instanceof Array) {
              if (
                searchInText(text, element[0]) ||
                searchInText(text, element[1])
              )
                return true;
            } else {
              if (fullSearch(text)(element)) return true;
            }
    }
    return false;
  };
}
const noSearch = (node: NodeBasic): boolean => {
  return false;
};

const select = defineComponent({
  data() {
    return {
      text: "",
      key: "",
      search: noSearch,
    };
  },
  props: { video: { type: Object as PropType<TreeRoot>, required: true } },
  components: { Tree },
  emits: ["select"],
  computed: {
    _sub(): NodeBasic[] {
      return reactive(this.video.root);
    },
    orderedSub(): NodeBasic[] {
      return this._sub.sort((a, b) => {
        return compare(a.value, b.value);
      });
    },
  },
  methods: {
    reset() {
      this.search = noSearch;
    },
    fullSearch() {
      this.search = fullSearch(this.text, this.key);
    },
    generate() {
      makeFile("result.json", JSON.stringify(this.video));
    },
    chooseNode(...nodes: NodeBasic[]) {
      this.$emit("select", ...nodes.reverse());
    },
  },
});
export default select;
</script>

<style>
</style>