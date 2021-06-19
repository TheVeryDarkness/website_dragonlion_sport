<template>
  <fieldset class="top">
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
import videoData from "~/data/video.json";
export default {
  data() {
    return { video: videoData };
  },
};
</script>

<style>
</style>