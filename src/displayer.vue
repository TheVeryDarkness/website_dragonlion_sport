<template>
  <video
    v-if="!!video"
    v-bind:src="video"
    @timeupdate="check"
    controls
    autoplay
  >
    浏览器不支持HTML5视频，请使用高版本浏览器或点击链接
  </video>
  <iframe
    v-if="!!frame"
    v-bind:src="frame"
    andbox="allow-same-origin allow-top-navigation-by-user-activation allow-scripts"
  ></iframe>
</template>

<script lang="ts">
import { videoInfo } from "@/tree";
import { defineComponent, PropType } from "vue";
const Displayer = defineComponent({
  props: {
    node: { type: Object as PropType<videoInfo>, default: {} },
    mode: { type: String as PropType<"html5" | "iframe"> },
  },
  computed: {
    video(): string {
      return this.node.src ? this.node.src : "";
    },
    range(): [number, number] {
      const range = this.node.range;
      if (range) return [parseInt(range[0]), parseInt(range[1])];
      else return [0, Infinity];
    },
    frame(): string {
      const node = this.node;
      const frame = this.node.frame;
      if (!frame) return "about:blank";
      if (node.from == "bilibili") {
        // See http://docs.bilibili.cn/wiki
        // Reference:
        //	https://blog.csdn.net/xinshou_caizhu/article/details/94028606
        //	https://www.bilibili.com/read/cv5293665/
        return frame + "&high_quality=1&t=" + this.range[0];
      } else if (node.from == "vqq") {
        // See https://m.v.qq.com/txp/v3/src/iframeapi/new.html
        return frame + "&show1080p=1&starttime=" + this.range[0];
      } else if (node.from == "youku") {
        // See http://open.iqiyi.com/lib/play.html,
        //	or http://static-d.iqiyi.com/ext/openapi/iQiyi_Gragonfly_coop_20190304.pdf
        // Reference:
        //	https://open.iqiyi.com/help/qa/play.html
        //	https://cloud.tencent.com/developer/article/1494396
        return (
          frame + "?starttime=" + this.range[0] + "&endtime=" + this.range[1]
        );
      } else {
        console.log("Unrecognized video source: '", node.from, "'");
        return frame;
      }
    },
  },
  methods: {
    check(ev: Event) {
      console.log(ev);
      const video = ev.target as HTMLVideoElement;
      if (video.currentTime >= this.range[1]) {
        video.pause();
      }
    },
  },
});
export default Displayer;
</script>

<style>
</style>