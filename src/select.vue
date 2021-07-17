<template>
  <fieldset class="top">
    <input type="text" v-model="key" placeholder="字段" size="6" />
    <input type="text" v-model="text" placeholder="关键字" />
    <input type="button" value="搜索" @click="fullSearch()" />
    <input type="button" value="取消" @click="reset()" />
    <input
      class="button"
      type="button"
      v-bind:value="locked ? '编辑' : '生成'"
      @click="generate"
    />
    <div>
      <Tree
        style="margin: 0; padding: 0"
        v-for="(root, index) in video.root"
        :key="index"
        v-bind:root="root"
        v-bind:want="search"
        v-bind:locked="locked"
        @choose="chooseNode"
      />
    </div>
  </fieldset>
  <Displayer v-bind:node="chosenNode" @update="update" />
</template>

<script lang="ts">
import { default as Tree } from "@/tree.vue";
import { NodeBasic, TreeRoot, VideoInfo } from "./tree";
import Displayer from "@/displayer.vue";
import { defineComponent, PropType } from "vue";

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
      locked: true,
      search: noSearch,
      chosenNodes: new Array<NodeBasic>(),
    };
  },
  props: { video: { type: Object as PropType<TreeRoot>, required: true } },
  components: { Tree, Displayer },
  methods: {
    reset() {
      this.search = noSearch;
    },
    fullSearch() {
      this.search = fullSearch(this.text, this.key);
    },
    generate() {
      this.locked = !this.locked;
      if (this.locked) makeFile("result.json", JSON.stringify(this.video));
    },
    chooseNode(...nodes: NodeBasic[]) {
      this.chosenNodes = nodes;
    },
  },
  computed: {
    chosenNode(): VideoInfo {
      const res: { [key: string]: any } = {};
      this.chosenNodes.forEach((_: VideoInfo & NodeBasic) => {
        let key: keyof (VideoInfo & NodeBasic);
        for (key in _) {
          if (res[key] == undefined) res[key] = _[key];
        }
      });
      return res;
    },
  },
});
export default select;
</script>

<style>
</style>