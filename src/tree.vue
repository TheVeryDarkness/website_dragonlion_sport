<template>
  <ul style="margin: 0" v-for="(item, index) in roots" :key="index">
    <li style="list-style: none" @click="changeStatus">
      <span style="cursor: pointer">
        {{ item.sub ? (opened ? "&#8594;" : "&#8595;") : "o" }}
      </span>
      {{ item.value }}
    </li>
    <tree v-if="opened" v-bind:roots="item.sub ? item.sub : []"> </tree>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
interface treeNode {
  value: string;
  sub: treeNode[];
  [key: string]: any;
}
function flaten(object: treeNode[]) {
  var has_sub = true;
  var res: treeNode[][] = [];
  var layer: treeNode[] = [];
  res.push(object);
  while (has_sub) {
    has_sub = false;
    for (const node of res[res.length - 1])
      if (node.sub && node.sub.length != 0) {
        has_sub = true;
        for (const sub of node.sub) layer.push(sub);
      }
    res.push(layer);
    layer = [];
  }
  console.log(res);
  return res;
}
const tree = defineComponent({
  data() {
    return {
      opened: false,
    };
  },
  props: {
    roots: { type: Object as PropType<treeNode[]>, required: true },
    titles: Array,
  },
  computed: {
    flatened(): treeNode[][] {
      if (this.roots) return flaten(this.roots);
      else return [];
    },
  },
  methods: {
    changeStatus() {
      this.opened = !this.opened;
    },
  },
});
export default tree;
</script>

<style>
</style>