<template>
  <div class="home">
    <Hero/>
    <Products/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero.vue'
import Products from '@/components/Products.vue'

export default {
  name: 'home',
  components: {
    Hero,
    Products
  }
}
</script>
