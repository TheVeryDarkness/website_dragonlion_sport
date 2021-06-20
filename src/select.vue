<template>
  <fieldset class="top">
    <Tree v-bind:roots="video.root" />
    <form id="selectItem" autocomplete="off">
      <div class="selectSet">
        <label for="s0">运动项目</label>
        <select id="s0">
          <option selected="selected">全选</option>
        </select>
      </div>
      <div class="selectSet">
        <label for="s1">年份</label>
        <select id="s1">
          <option selected="selected">全选</option>
        </select>
      </div>
      <div class="selectSet">
        <label for="s2">赛事</label>
        <select id="s2">
          <option selected="selected">全选</option>
        </select>
      </div>
      <div class="selectSet">
        <label for="s3">队伍</label>
        <select id="s3">
          <option selected="selected">全选</option>
        </select>
      </div>
      <div class="selectSet">
        <label for="s4">动作</label>
        <select id="s4">
          <option selected="selected">全选</option>
        </select>
      </div>
      <input class="button" type="submit" value="等待" id="loadStatus" />
      <input class="button" type="button" value="生成" id="generateJSON" />
    </form>
  </fieldset>
</template>

<script lang="ts">
import Tree from "@/tree.vue";
import { defineComponent } from "vue";
import videoData from "~/data/video.json";
const select = defineComponent({
  data() {
    return { video: videoData };
  },
  components: { Tree },
});
export default select;
</script>

<style>
</style>