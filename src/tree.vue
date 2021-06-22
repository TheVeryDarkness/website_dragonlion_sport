<template>
  <div style="list-style: none" v-bind:title="root.value">
    <span style="cursor: pointer" @click="changeStatus">
      {{ has_sub ? (open ? "&#8594;" : "&#8595;") : "[]" }}
    </span>
    {{ root.value }}
    <span v-for="(key, index) in ['src', 'origin']" :key="index">
      <input
        type="url"
        size="6"
        v-bind:disabled="locked"
        v-if="root[key]"
        v-model="root[key]"
        v-bind:title="root[key]"
      />
    </span>
  </div>
  <ul v-show="open" style="margin: 0">
    <tree
      v-for="(item, index) in root.sub"
      :key="index"
      v-bind:root="item"
      v-bind:want="want"
      v-bind:locked="locked"
      @found="_found"
    />
  </ul>
</template>

<script lang="ts">
import { node } from "./tree";
import { defineComponent, PropType } from "vue";
const tree = defineComponent({
  data() {
    return {
      referenced: false,
      opened: false,
    };
  },
  props: {
    root: { type: Object as PropType<node>, required: true },
    locked: { type: Boolean },
    want: {
      type: Function as PropType<(_: node) => boolean>,
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
  emits: ["found"],
  methods: {
    _found(foundInSub: boolean) {
      this.referenced = foundInSub || this.referenced;
      this.$emit("found", this.referenced || this.want(this.root));
    },
    changeStatus() {
      this.opened = !this.opened;
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