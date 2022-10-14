<template>
  <div>
    <nuxt />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import Footer from "@/components/TheFooter.vue";
import Header from "@/components/Header.vue";
import NewsLetter from "@/components/newsLetter.vue";
import global from "@/mixins.js/global.js";
Vue.mixin(global);
export default {
  components: {
    Footer,
    NewsLetter,
    Header,
  },
};
</script>

<style>
@font-face {
  font-family: "IRANSans";
  font-style: normal;
  font-weight: normal;
  src: url("../assets/fonts/IRANSans-web.eot") format("embedded-opentype"),
    url("../assets/fonts/IRANSans-web.woff") format("woff"),
    url("../assets/fonts/IRANSans-web.ttf") format("truetype");
  font-display: swap;
}
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  direction: rtl;
  text-align: right;
  font-family: "IRANSans";
}
img {
  pointer-events: none;
}
body {
  overflow: auto;
}
.root {
  height: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  overflow-x: hidden;
}

a {
  text-decoration: none !important;
  color: inherit !important;
  cursor: pointer !important;
}
ol,
ul {
  padding: 0 !important;
}
</style>
