<template>
  <video v-if="!!video.src" v-bind:src="video.src" controls autoplay>
    浏览器不支持HTML5视频，请使用高版本浏览器或点击链接
  </video>
</template>

<script lang="ts">
import { segmentInfo, videoInfo } from "@/tree";
import { defineComponent, PropType } from "vue";
const Displayer = defineComponent({
  props: {
    video: { type: Object as PropType<videoInfo>, default: {} },
    segment: {
      type: Object as PropType<segmentInfo>,
      default: {},
    },
  },
});
export default Displayer;
</script>

<style>
</style>