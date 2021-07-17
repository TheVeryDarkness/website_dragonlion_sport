<template>
  <div v-for="(value, key) in node" :key="key">
    <div v-if="key != 'sub'">
      <span v-show="editable(key)" style="cursor: pointer" @click="deleteKey">
        -
      </span>
      <span v-show="!editable(key)" style="cursor: not-allowed"> - </span>
      <input size="6" v-if="key" v-bind:value="key" readonly />
      <input size="32" v-model="node[key]" />
    </div>
  </div>
  <span v-show="!!new_key" style="cursor: pointer" @click="addKey"> + </span>
  <span v-show="!new_key" style="cursor: not-allowed"> + </span>
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
  computed: {},
  methods: {
    addKey() {
      this.$emit("update", this.new_key, "");
      this.new_key = "";
    },
    deleteKey(e: MouseEvent) {
      const elem = e.target as HTMLElement;
      const key = (elem.parentNode?.childNodes[2] as HTMLInputElement).value;
      console.log(key);
      this.$emit("update", key, undefined);
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