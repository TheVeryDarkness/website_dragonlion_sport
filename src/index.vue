<template>
  <div>
    <Header v-on:select-page="update" />
    <hr />
    <Select v-bind:video="data" v-if="page == 0 || page == 3" />
    <Manage v-bind:data="data" v-if="page == 3" />
    <Links v-if="page == 1" />
    <Table v-if="page == 2" />
    <hr />
    <Footer />
    <noscript>浏览器不支持脚本，请使用高版本浏览器或点击链接</noscript>
  </div>
</template>

<script lang="ts">
import Header from "@/choose-page.vue";
import Select from "@/select.vue";
import Footer from "@/footer.vue";
import Table from "@/table.vue";
import Links from "@/links.vue";
import Manage from "@/manage.vue";
import { defineComponent } from "vue";
import videoData from "~/data/video.json";
const Main = defineComponent({
  data() {
    return { page: 0, data: videoData };
  },
  methods: {
    update(i: number) {
      this.page = i;
    },
  },
  computed: {},
  components: { Header, Select, Table, Footer, Links, Manage },
});
export default Main;
</script>

<style>
:root {
  font-family: "Cursive", "KaiTi_GB2312", "DFKai-SB", "FangSong",
    "FangSong_GB2312";
  /* To be overriden */
  font-size: 48px;
}
hr {
  z-index: auto;
}
@media (max-width: 2400px) {
  :root {
    font-size: 36px;
  }
}
@media (max-width: 1800px) {
  :root {
    font-size: 34px;
  }
}
@media (max-width: 1440px) {
  :root {
    font-size: 32px;
  }
}
@media (max-width: 1200px) {
  :root {
    font-size: 30px;
  }
}
@media (max-width: 960px) {
  :root {
    font-size: 28px;
  }
}
@media (max-width: 840px) {
  :root {
    font-size: 26px;
  }
}
@media (max-width: 720px) {
  :root {
    font-size: 24px;
  }
}
@media (max-width: 540px) {
  :root {
    font-size: 22px;
  }
}
@media (max-width: 480px) {
  :root {
    font-size: 20px;
  }
}
@media (max-width: 420px) {
  :root {
    font-size: 18px;
  }
}
@media (max-width: 360px) {
  :root {
    font-size: 16px;
  }
}
@media (max-width: 320px) {
  :root {
    font-size: 14px;
  }
}
@media (max-width: 280px) {
  :root {
    font-size: 12px;
  }
}
@media (max-width: 240px) {
  :root {
    font-size: 10px;
  }
}
@media (max-width: 120px) {
  :root {
    font-size: 8px;
  }
}
</style>