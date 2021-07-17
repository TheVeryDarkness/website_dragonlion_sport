<template>
  <div v-for="(value, key) in node" :key="key">
    <div v-if="key != 'sub'">
      <label
        v-bind:style="{ cursor: editable(key) ? 'pointer' : 'not-allowed' }"
        @click="deleteKey"
        v-bind:for="'input-value-' + key"
      >
        -
      </label>
      <input size="6" v-if="key" v-bind:value="key" readonly />
      <input
        v-bind:id="'input-value-' + key"
        size="32"
        @input="updateValue(key, $event)"
        v-bind:value="JSON.stringify(node[key])"
      />
    </div>
  </div>
  <label
    v-bind:style="{ cursor: addable(new_key) ? 'pointer' : 'not-allowed' }"
    @click="addKey"
  >
    +
  </label>
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
      if (!this.addable(this.new_key)) {
        console.error("Do not cheat.");
        return;
      }
      this.$emit("update", this.new_key, "");
      this.new_key = "";
    },
    deleteKey(e: MouseEvent) {
      const elem = e.target as HTMLElement;
      const key = (elem.parentNode?.childNodes[1] as HTMLInputElement).value;
      if (!this.editable(key)) {
        console.error("Do not cheat.");
        return;
      }
      this.$emit("update", key, undefined);
    },
    updateValue(key: string, e: InputEvent) {
      const input = e.target as HTMLInputElement;
      if (!input.labels) {
        console.error(input, "does not have a label.");
        return;
      }
      const label = input.labels[0];
      console.log(label.textContent);
      try {
        const value = input.value;
        const obj = JSON.parse(value);
        this.$emit("update", key, obj);
        label.innerHTML = " - ";
      } catch (error) {
        label.innerHTML = " x ";
        console.error(e, "does not contain legal JSON value.");
      }
    },
    addable(key: string) {
      return key != "value" && key != "sub" && key;
    },
    editable(key: string) {
      return key != "value" && key != "sub";
    },
    legal(str: string) {
      try {
        const s = JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    },
  },
});
export default editor;
</script>

<style>
</style>