<template>
  <ul>
    <li style="list-style: none; margin: 0; padding: 0">
      <span
        v-bind:style="labelStyle"
        @click="changeStatus"
        v-bind:title="root.value"
        v-text="has_sub ? (open ? '&#8594;' : '&#8595;') : '[]'"
      ></span>
      <a v-bind:style="anchorStyle" @click="chooseNode">{{ root.value }}</a>
      <tree
        style="margin: 0 0 0 6%; padding: 0"
        v-show="open"
        v-for="item in orderedSub"
        :key="item.value"
        v-bind:root="item"
        v-bind:want="want"
        @found="_found"
        @choose="_choose"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { NodeBasic } from "./tree";
import { defineComponent, PropType, reactive, watch } from "vue";
import { compare } from "@/compare";
const tree = defineComponent({
  data() {
    return {
      referenced: false,
      opened: false,
    };
  },
  props: {
    root: { type: Object as PropType<NodeBasic>, required: true },
    want: {
      type: Function as PropType<(_: NodeBasic) => boolean>,
      required: true,
    },
  },
  computed: {
    has_sub(): boolean {
      const sub = this.sub;
      return !!sub && sub.length > 0;
    },
    open(): boolean {
      return this.referenced || this.opened;
    },
    labelStyle(): { cursor: string } {
      return {
        cursor: this.has_sub ? (this.open ? "zoom-out" : "zoom-in") : "help",
      };
    },
    anchorStyle(): { padding: string } {
      return { padding: "0 0.5em 0 0.5em" };
    },
    sub(): NodeBasic[] {
      return reactive(this.root.sub ? this.root.sub : []);
    },
    orderedSub(): NodeBasic[] {
      return this.sub.sort((a, b) => {
        return compare(a.value, b.value);
      });
    },
  },
  emits: ["found", "choose"],
  methods: {
    _found(foundInSub: boolean) {
      this.referenced = foundInSub || this.referenced;
      this.$emit("found", this.referenced || this.want(this.root));
    },
    changeStatus(e: MouseEvent) {
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
      if (!this.sub || this.sub.length == 0)
        this.$emit("found", newWant(this.root));
    },
  },
});
export default tree;
</script>

<style>
</style>