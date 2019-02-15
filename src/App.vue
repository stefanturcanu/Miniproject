<template>
  <div id="app">
    <main-header/>
    <div class="grid-container">
      <div class="asidebar">
      <sidebar-nav/>
      <tagsbar/>
      </div>
      <router-view/>
    </div>
    <brand-slider/>
    <main-footer/>
  </div>
</template>

<style lang="scss">

@import "./assets/styles/main";
</style>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue'
import SidebarNav from '@/components/SidebarNav'
import Tagsbar from '@/components/Tagsbar'
import BrandSlider from '@/components/BrandSlider.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: {
    MainHeader,
    SidebarNav,
    Tagsbar,
    BrandSlider,
    MainFooter
  }
}
</script>
