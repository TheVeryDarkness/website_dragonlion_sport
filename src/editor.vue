<template>
  <div v-for="(value, key) in node" :key="key">
    <div v-if="key != 'sub'">
      <span v-if="editable(key)" style="cursor: pointer">-</span>
      <span v-if="!editable(key)" style="cursor: help">-</span>
      <input size="6" v-if="key" v-bind:value="key" readonly />
      <input size="32" v-model="node[key]" />
    </div>
  </div>
  <span style="cursor: pointer" @click="addKey">+</span>
  <input size="6" v-model="new_key" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NodeBasic } from "@/tree";
const editor = defineComponent({
  data() {
    return { new_key: "" };
  },
  props: { node: { type: Object as PropType<NodeBasic>, required: true } },
  emits: ["update"],
  methods: {
    addKey() {
      if (this.new_key) {
        this.$emit("update", this.new_key, "");
        this.new_key = "";
      }
    },
    editable(key: string) {
      return key != "value" && key != "sub";
    },
  },
});
export default editor;
</script>

<style>
</style>