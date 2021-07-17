<template>
  <div
    id="displayer"
    style="position: absolute; inset: 0; min-width: 100%; min-height: 100%"
    v-show="open"
    @click="open = !open"
  >
    <div style="position: absolute; display: flex; margin: 6%; width: 88%">
      <fieldset style="width: 100%" class="top" @click.stop="">
        <Editor
          v-if="nodes.length"
          v-bind:node="node"
          @update="update"
          ref="editor"
        />
        <hr />
        <div style="width: 100%">
          <video
            v-if="!!video"
            v-bind:src="video"
            style="min-width: 100%"
            @timeupdate="check"
            controls
            autoplay
          >
            浏览器不支持HTML5视频，请使用高版本浏览器或点击链接
          </video>
          <iframe
            v-if="!!frame"
            v-bind:src="frame"
            style="min-width: 78vw; min-height: 52vw"
            title="内联框架"
            sandbox="allow-same-origin allow-top-navigation-by-user-activation allow-scripts"
          ></iframe>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script lang="ts">
import { NodeBasic, VideoInfo } from "@/tree";
import Editor from "@/editor.vue";
import { defineComponent, PropType, reactive } from "vue";

const Displayer = defineComponent({
  data() {
    return { ended: false, inited: false, open: false };
  },
  props: {
    nodes: { type: Array as PropType<(VideoInfo & NodeBasic)[]>, default: [] },
    mode: { type: String as PropType<"html5" | "iframe"> },
  },
  computed: {
    video(): string {
      return this.getStr("src");
    },
    range(): [number, number] {
      const range = this.getArr("range");
      var res: [number, number] = [0, Infinity];
      if (range) {
        const r0 = parseInt(range[0]);
        const r1 = parseInt(range[1]);
        if (!isNaN(r0)) res[0] = r0;
        if (!isNaN(r1)) res[1] = r1;
      }
      return res;
    },
    frame(): string {
      const from = this.getStr("from");
      const frame = this.getStr("frame");
      if (!frame) return "";
      if (from == "bilibili") {
        // See http://docs.bilibili.cn/wiki
        // Reference:
        //	https://blog.csdn.net/xinshou_caizhu/article/details/94028606
        //	https://www.bilibili.com/read/cv5293665/
        return frame + "&high_quality=1&t=" + this.range[0];
      } else if (from == "vqq") {
        // See https://m.v.qq.com/txp/v3/src/iframeapi/new.html
        return frame + "&show1080p=1&starttime=" + this.range[0];
      } else if (from == "youku") {
        // See http://open.iqiyi.com/lib/play.html,
        //	or http://static-d.iqiyi.com/ext/openapi/iQiyi_Gragonfly_coop_20190304.pdf
        // Reference:
        //	https://open.iqiyi.com/help/qa/play.html
        //	https://cloud.tencent.com/developer/article/1494396
        return (
          frame + "?starttime=" + this.range[0] + "&endtime=" + this.range[1]
        );
      } else {
        console.log("Unrecognized video source: '", from, "'");
        return frame;
      }
    },
    node(): NodeBasic | VideoInfo {
      return this.nodes[this.nodes.length - 1];
    },
  },
  watch: {
    nodes() {
      this.inited = false;
      this.open = true;
    },
  },
  methods: {
    check(ev: Event) {
      const video = ev.target as HTMLVideoElement;
      if (!this.inited) {
        video.currentTime = this.range[0];
        video.play();
        this.inited = true;
      }
      if (!this.ended && video.currentTime >= this.range[1]) {
        video.pause();
        this.ended = true;
      }
    },
    update(
      key: string,
      value: undefined | string | string[] | string[][] | NodeBasic[]
    ) {
      var _node = this.nodes[this.nodes.length - 1];
      if (value == undefined) delete _node[key];
      else _node[key] = value;
      (this.$refs.editor as typeof Editor).$forceUpdate();
      this.$forceUpdate();
    },
    getStr<T extends "src" | "frame" | "origin" | "from">(key: T) {
      var value = "";
      this.nodes.forEach((node: VideoInfo) => {
        const v = node[key];
        if (v) value = v;
      });
      return value;
    },
    getArr<T extends "range">(key: T) {
      var value: string[] = [];
      this.nodes.forEach((node: VideoInfo) => {
        const v = node[key];
        if (v) value = v;
      });
      return value;
    },
  },
  components: { Editor },
});
export default Displayer;
</script>

<style scoped>
video.video {
  margin-top: 0.6em;
  float: left;
  display: block;
}
iframe.video {
  border: 0;
  margin-top: 0.6em;
  float: left;
  display: none;
}
</style>