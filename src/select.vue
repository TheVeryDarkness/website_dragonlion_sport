<template>
  <fieldset class="top">
    <input type="text" v-model="level" placeholder="层次" />
    <input type="text" v-model="key" placeholder="字段" />
    <input type="text" v-model="text" placeholder="关键字" />
    <input type="button" value="搜索" @click="fullSearch()" />
    <input type="button" value="取消" @click="reset()" />
    <input class="button" type="button" value="生成" />
    <Tree
      v-for="(root, index) in video.root"
      :key="index"
      v-bind:root="root"
      v-bind:want="search"
    />
  </fieldset>
</template>

<script lang="ts">
import { default as Tree } from "@/tree.vue";
import { node, tree } from "./tree";
import { defineComponent } from "vue";
import videoData from "~/data/video.json";

function searchInText(a: string, b: string): boolean {
  return b.includes(a);
}
function fullSearch(text: string, _key: string = ""): (node: node) => boolean {
  return function (node: node) {
    let key: keyof node;
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
const noSearch = (node: node): boolean => {
  return false;
};

const select = defineComponent({
  data() {
    return {
      video: videoData as tree,
      level: [0, 6],
      text: "",
      key: "",
      search: noSearch,
    };
  },
  components: { Tree },
  methods: {
    reset() {
      this.search = noSearch;
    },
    fullSearch() {
      this.search = fullSearch(this.text, this.key);
    },
  },
});
export default select;
</script>

<style>
</style>