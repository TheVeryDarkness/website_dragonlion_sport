<template>
  <tr v-for="(i, _i) in range" :key="_i">
    <td v-bind:rowspan="row_span" v-if="_i == 0">{{ head }}</td>
    <td v-for="(element, _j) in row" :key="_j">
      {{ row[_j][_i] }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
const row = defineComponent({
  props: {
    row: { type: Array as PropType<string[][]>, required: true },
    head: { type: String, required: true },
  },
  computed: {
    range() {
      const j = this.row_span;
      var i = 0;
      var res: number[] = [];
      for (i = 0; i < j; ++i) res.push(i);
      return res;
    },
    row_span(): number {
      return this.max(this.row);
    },
  },
  methods: {
    max(_: string[][]) {
      var m = 0;
      _.forEach((arr) => {
        if (arr.length > m) m = arr.length;
      });
      return m;
    },
  },
});
export default row;
</script>

<style>
</style>