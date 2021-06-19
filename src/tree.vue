<template>
  <table>
    <tr
      v-for="(item, index) in expanded"
      :key="index"
      v-bind:value="item.value"
    >
      <input v-for="(_item, _index) in data.root" :key="_index" />
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface treeNode {
  value: string;
  sub: treeNode[];
}
const tree = defineComponent({
  data() {
    return { flatened: undefined };
  },
  props: { data: Object, titles: Array },
  setup(props) {},
  computed: {
    roots(): treeNode[] {
      return this.data && this.data.root ? this.data.root : [];
    },
  },
  methods: {
    flaten(object: {
      root: { value: string; sub?: treeNode[]; [key: string]: any }[];
    }) {
      var has_sub = false;
      var res = [];
      var layer = [];
      res.push(object.root);
      while (has_sub) {
        has_sub = false;
        for (const node of res[res.length - 1])
          if (node.sub && node.sub.length != 0)
            for (const sub in node.sub) {
              layer.push(sub);
            }
          else has_sub = false;
        res.push(layer);
        layer.splice(0, layer.length);
      }
      return res;
    },
  },
});
export default tree;
</script>

<style>
</style>