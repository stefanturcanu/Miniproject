<template>
  <div id="products">
    <div class="products-headline">
      <h3>NEW PRODUCTS</h3>
      <div class="product-slider">
        <button>
          <i class="fas fa-angle-left"></i>
        </button>
        <button>
          <i class="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
    <div class="product-list-wrapper">
      <div class="product-main" v-for="product in products" :key="product.id">
        <picture>
          <router-link :to="`/product/${product.id}`"><img :src="product.productviewImg"></router-link>
        </picture>
        <div class="price-wrapper">
          <div class="price-col">
           <h4>{{product.productSingleTitle}}</h4>
          </div>
          <div class="price-col">
            <p>
            <span>£</span>
            {{product.productPrice}}
          </p>
          </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Products',

  data () {
    return {
      products: null
    }
  },

  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      axios
        .get('/productlist.json')
        .then(response => (this.products = response.data.products))
    }
  }
}
</script>
