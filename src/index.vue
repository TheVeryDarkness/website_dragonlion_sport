<template>
  <div>
    <Header v-on:select-page="update" />
    <hr />
    <Select v-if="page == 0 || page == 3" />
    <Links v-if="page == 1" />
    <Table v-if="page == 2" />
    <noscript>浏览器不支持脚本，请使用高版本浏览器或点击链接</noscript>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/choose-page.vue";
import Select from "@/select.vue";
import Footer from "@/footer.vue";
import Table from "@/table.vue";
import Links from "@/links.vue";
import { defineComponent } from "vue";
const Main = defineComponent({
  data() {
    return { page: 0 };
  },
  methods: {
    update(i: number) {
      this.page = i;
    },
  },
  computed: {},
  components: { Header, Select, Table, Footer, Links },
});
export default Main;
</script>

<style scoped>
</style>