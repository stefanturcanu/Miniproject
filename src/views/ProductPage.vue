<template>
    <div class="single_product_grid">
        <ProductSingle/>
    </div>
</template>

<script>
// @ is an alias to /src
import ProductSingle from '@/components/ProductSingle.vue'
export default {
  name: 'productpage',
  components: {
    ProductSingle
  }
}
</script>
