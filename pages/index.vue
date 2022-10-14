<template>
  <div class="root">
    <div class="header-and-hero">
      <TheHeader />
      <HeroSection />
      <img
        class="hero-section-bg"
        src="@/assets/images/Group266.webp"
        alt="بک-گراند"
        title="بک-گراند"
        loading="lazy"
      />
    </div>
    <Categories />
    <LatestMobileFrame />
    <SpecialOffers />
    <LatestSmartWatch />
    <SetAccessories />
    <LatesMobile />
  </div>
</template>

<script>
import TheHeader from "@/components/Header.vue";
import HeroSection from "@/components/HeroSection.vue";
import Categories from "@/components/Categories.vue";
import LatestMobileFrame from "@/components/LatestMobileFrame.vue";
import SpecialOffers from "@/components/specialOffers.vue";
import LatestSmartWatch from "@/components/latestSmartWatch.vue";
import SetAccessories from "@/components/setAccessories.vue";
import LatesMobile from "@/components/latesMobile.vue";

export default {
  name: "IndexPage",
  components: {
    TheHeader,
    HeroSection,
    Categories,
    LatestMobileFrame,
    SpecialOffers,
    LatestSmartWatch,
    SetAccessories,
    LatesMobile,
  },
};
</script>
<style lang="scss">
.active {
  display: block !important;
}

/** header and hero section */
.header-and-hero {
  .header {
    background: none;
  }
  position: relative;

  margin: 0 auto;
  width: 100%;
  height: 960px;
  margin-bottom: 100px;
  @include lg {
    height: 850px;
  }
  @include breakpoint(930px) {
    height: 750px;
  }
  @include breakpoint(690px) {
    height: 700px;
  }
  @include breakpoint(560px) {
    height: 650px;
  }

  @include sm {
    height: 500px;
  }
  @include breakpoint(400px) {
    height: 540px;
  }
}

.hero-section-bg {
  @include total-box;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
