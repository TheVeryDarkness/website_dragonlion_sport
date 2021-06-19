import Vue from "vue";
import App from "./index.vue";
// 这个对象将添加到组件实例中
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
});
