<template>
  <header>
    <h1 v-html="'龙狮运动' + titles[page]"></h1>
    <div class="area">
      <ul class="menu">
        <li v-for="(item, index) in shorts" :key="index">
          <a style="cursor: pointer" @click.stop="update(index)"> {{ item }}</a>
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

<style scoped>
header > h1 {
  padding-top: 12%;
  margin-left: 1%;
}

header {
  background-position: right top;
  background-repeat: no-repeat;
  background-clip: content-box;
  background-size: contain;
  background-color: transparent;
  background-image: url("../pic/background/sakura-background.png");
}

ul {
  text-align: left;
  list-style: none;
  display: inline;
  clear: both;
}

ul > li {
  font-size: 1.3em;
  text-align: left;
  display: block;
  float: left;
  width: 10%;
}

ul > li > a {
  font-size: inherit;
  text-align: left;
  text-decoration: none;
}
</style>