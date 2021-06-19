<template>
  <header>
    <h1 v-html="'龙狮运动' + titles[page]"></h1>
    <div class="area">
      <ul class="menu">
        <li v-for="(item, index) in shorts" :key="index">
          <a style="cursor: pointer" @click="update(index)"> {{ item }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const choosePage = defineComponent({
  data() {
    return {
      page: 0,
      shorts: ["视频", "链接", "参考", "管理"],
      titles: ["视频导引", "相关链接", "资料参考", "管理工具"],
    };
  },
  methods: {
    update(index: number) {
      this.page = index;
      this.$emit("select-page", index);
    },
  },
});
export default choosePage;
</script>

<style>
</style>