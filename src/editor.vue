<template>
  <div v-for="(value, key) in node" :key="key">
    <div v-if="key != 'sub'">
      <input size="6" v-if="key == ''" value="" @change.stop="changeKey" />
      <input size="6" v-if="key != ''" v-bind:value="key" readonly />
      <input size="32" v-model="node[key]" />
    </div>
  </div>
  <span style="cursor: pointer" @click="addKey">+</span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NodeBasic } from "@/tree";
const editor = defineComponent({
  props: { node: { type: Object as PropType<NodeBasic>, required: true } },
  methods: {
    addKey() {
      this.$emit("update", "", "");
    },
    changeKey(e: Event) {
      console.log(e);
      this.$emit("update", (e.target as HTMLInputElement).value, this.node[""]);
      this.$emit("update", "", undefined);
    },
  },
});
export default editor;
</script>

<style>
</style>