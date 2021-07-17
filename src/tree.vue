<template>
  <ul>
    <li style="list-style: none; margin: 0; padding: 0">
      <span
        style="cursor: pointer"
        @click="changeStatus"
        v-bind:title="root.value"
      >
        {{ has_sub ? (open ? "&#8594;" : "&#8595;") : "[]" }}
      </span>
      <a @click="chooseNode">{{ root.value }}</a>
      <tree
        style="margin: 0 0 0 6%; padding: 0"
        v-show="open"
        v-for="(item, index) in root.sub"
        :key="index"
        v-bind:root="item"
        v-bind:want="want"
        v-bind:locked="locked"
        @found="_found"
        @choose="_choose"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { NodeBasic } from "./tree";
import { defineComponent, PropType } from "vue";
const tree = defineComponent({
  data() {
    return {
      referenced: false,
      opened: false,
    };
  },
  props: {
    root: { type: Object as PropType<NodeBasic>, required: true },
    locked: { type: Boolean },
    want: {
      type: Function as PropType<(_: NodeBasic) => boolean>,
      required: true,
    },
  },
  computed: {
    has_sub(): boolean {
      const sub = this.root.sub;
      return !!sub && sub.length > 0;
    },
    open(): boolean {
      return this.referenced || this.opened;
    },
  },
  emits: ["found", "choose"],
  methods: {
    _found(foundInSub: boolean) {
      this.referenced = foundInSub || this.referenced;
      this.$emit("found", this.referenced || this.want(this.root));
    },
    changeStatus() {
      this.opened = !this.opened;
    },
    chooseNode() {
      this.$emit("choose", this.root);
    },
    _choose(...nodes: NodeBasic[]) {
      this.$emit("choose", ...nodes, this.root);
    },
  },
  watch: {
    want(newWant, oldWant) {
      this.referenced = false;
      if (!this.root.sub || this.root.sub.length == 0)
        this.$emit("found", newWant(this.root));
    },
  },
});
export default tree;
</script>

<style>
</style>