<template>
  <table class="text normal">
    <caption>
      难度表
    </caption>
    <thead>
      <tr v-bind:col-span="data.rows.length">
        <th></th>
        <th v-for="(r, ir) in data.rows" :key="ir">{{ r }}</th>
      </tr>
    </thead>
    <Row
      v-for="(c, ic) in data.data"
      v-bind:row="c"
      v-bind:head="data.columns[ic]"
      :key="ic"
    />
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Row from "@/row.vue";
import _table from "~/data/tableDifficulty.json"; // [difficulty][category][action]
const table = defineComponent({
  data() {
    return { data: _table };
  },
  components: { Row },
});
export default table;
</script>

<style>
table {
  margin: auto;
  border-style: solid;
  border-width: 1px;
}

th,
td {
  border-style: solid;
  border-width: 1px;
  padding: 0;
}
</style>