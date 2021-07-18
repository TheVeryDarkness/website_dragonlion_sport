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
  <div>
    <label
      v-bind:style="{ cursor: addable(new_key) ? 'pointer' : 'not-allowed' }"
      @click="addKey"
    >
      +
    </label>
    <input size="6" @keyup.enter="addKey" v-model="new_key" />
  </div>
  <div>
    <label style="cursor: pointer" @click="$emit('chooseParent')"> * </label>
    <select @input="select">
      <option></option>
      <option v-for="(item, index) in node.sub" :key="index">
        {{ item.value }}
      </option>
      <option>+</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { NodeBasic } from "@/tree";
const editor = defineComponent({
  data() {
    return { new_key: "" };
  },
  props: { node: { type: Object as PropType<NodeBasic>, required: true } },
  emits: ["update", "chooseChild", "chooseParent"],
  computed: {},
  methods: {
    addKey() {
      if (this.addable(this.new_key)) {
        this.$emit("update", this.new_key, "");
        this.new_key = "";
      } else {
        console.error(this.new_key, "currently can't be added.");
      }
    },
    deleteKey(e: MouseEvent) {
      const elem = e.target as HTMLElement;
      const div = elem.parentNode as HTMLDivElement;
      const key = (div.childNodes[1] as HTMLInputElement).value;
      if (this.editable(key)) {
        this.$emit("update", key, undefined);
      } else {
        console.error(key, "can't be deleted.");
      }
    },
    updateValue(key: string, e: InputEvent) {
      const input = e.target as HTMLInputElement;
      if (!input.labels) {
        console.error(input, "does not have a label.");
        return;
      }
      const label = input.labels[0];
      try {
        const value = input.value;
        const obj = JSON.parse(value);
        if (!obj) throw obj;
        this.$emit("update", key, obj);
        label.innerHTML = " - ";
      } catch (error) {
        label.innerHTML = " x ";
      }
    },
    addable(key: string) {
      return key != "" && this.node[key] == undefined;
    },
    editable(key: string) {
      return key != "value" && key != "sub";
    },
    select(e: InputEvent) {
      const select = e.target as HTMLSelectElement;
      const index = select.selectedIndex;
      const options = select.options;
      //console.log(e, index, options);
      if (index == 0) return;
      else if (index == options.length - 1) {
        const pos = options.length - 2;
        this.$emit(
          "update",
          "sub",
          this.node.sub.concat([{ value: "!", sub: [] }])
        );
        this.$emit("chooseChild", pos);
      } else {
        this.$emit("chooseChild", index - 1);
        select.selectedIndex = 0;
      }
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