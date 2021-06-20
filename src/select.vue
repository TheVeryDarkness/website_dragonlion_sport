<template>
  <fieldset class="top">
    <input type="text" v-model="text" />
    <input type="button" value="搜索" @click="fullSearch()" />
    <Tree
      v-for="(root, index) in video.root"
      :key="index"
      v-bind:root="root"
      v-bind:want="search"
    />
    <input class="button" type="button" value="生成" id="generateJSON" />
  </fieldset>
</template>

<script lang="ts">
import { default as Tree } from "@/tree.vue";
import { treeNode } from "./tree";
import { defineComponent } from "vue";
import videoData from "~/data/video.json";

function searchInText(a: string, b: string): boolean {
  return b.includes(a);
}
function fullSearch(text: string): (node: treeNode) => boolean {
  return function (node: treeNode) {
    for (const key in node) {
      if (key == "sub") continue;
      const value = node[key];
      if (value)
        if (typeof value == "string") return searchInText(text, value);
        else
          for (const element of value)
            if (typeof element == "string") {
              if (searchInText(text, element)) return true;
            } else {
              if (fullSearch(text)(element)) return true;
            }
    }
    return false;
  };
}

const select = defineComponent({
  data() {
    return {
      video: videoData,
      text: "输入关键字以搜索",
      search: (node: treeNode): boolean => {
        return false;
      },
    };
  },
  components: { Tree },
  methods: {
    fullSearch() {
      this.search = fullSearch(this.text);
    },
  },
});
export default select;
</script>

<style>
</style>