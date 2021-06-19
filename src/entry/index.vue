<template>
  <div>
    <header>
      <h1 v-html="'龙狮运动' + titles[page]"></h1>
      <div class="area">
        <ul class="menu">
          <li @click="page = 0">主页</li>
          <li @click="page = 1">链接</li>
          <li @click="page = 2">参考</li>
          <li @click="page = 3">管理</li>
        </ul>
      </div>
    </header>
    <hr />
  </div>
</template>

<script>
import "@/load.js";
export default {
  data() {
    return {
      page: 0,
      titles: ["视频导引", "相关链接", "资料参考", "管理工具"],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>