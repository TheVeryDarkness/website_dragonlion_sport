<template>
  <div class="text normal">
    <footer>
      <small @click="change">{{ text }}</small>
      <br />
      <a href="https://github.com/TheVeryDarkness/website_dragonlion_sport/"
        >Maintain</a
      >ed by
      <a href="mailto:1853308@tongji.edu.com">黄博奕</a>
      <br />People's Republic of China
    </footer>
  </div>
</template>

<script lang="ts">
import { get, set } from "@/localStorage";
// Non-lazy
import "~/css/basic.css";
// lazy
import { default as dark } from "~/css/dark.css";
import { default as light } from "~/css/light.css";
import { defineComponent } from "vue";
light.use();
dark.use();
{
  var curtainStyle = document.getElementById("curtain");
  if (curtainStyle) {
    curtainStyle.remove();
  } else console.error("No curtain style");
}

function getDefault() {
  const s = get("theme");
  if (s == "dark") {
    return false;
  } else if (s == "light") {
    return true;
  }

  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return false;
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return true;
    } else if (
      window.matchMedia("(prefers-color-scheme: no-preference)").matches
    ) {
      return true;
    }
  }

  {
    const date = new Date();
    if (date.getHours() >= 22 || date.getHours() <= 6) return false;
    else return true;
  }
}

const footer = defineComponent({
  data: () => {
    return {
      text: "本来无物何处尘埃",
      enlightened: getDefault(),
    };
  },
  methods: {
    change() {
      if (this.enlightened) {
        this.turnOff();
        set("scheme", "dark");
      } else {
        this.turnOn();
        set("scheme", "light");
      }
    },
    turnOn() {
      dark.unuse();
      light.use();
      this.enlightened = true;
      this.text = "一开灯一切变妄念";
    },
    turnOff() {
      dark.use();
      light.unuse();
      this.enlightened = false;
      this.text = "一熄灯一切被纪念";
    },
  },
});
export default footer;
</script>

<style scoped>
footer {
  color: inherit;
  vertical-align: bottom;
  text-align: center;
}
small {
  font-size: 0.8em;
}
</style>