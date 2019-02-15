<template>
   <div class="single_product" >
    <div class="single_product_flex">
      <div class="spimage_container" v-if="product">
        <div class="slider">
          <div class="images"><img :src="product.productviewImg" alt=""></div>
          <div class="slider_thumb">
          <!-- <button class="btn-slider"><i class="fas fa-angle-left"></i></button> -->
          <img checked class="slide1" src="/img/Boardsmono.jpg" name="thumbnail" type="radio">
          <img class="slide2" src="/img/surfwidebody.jpg" name="thumbnail" type="radio">
          <img class="slide3" src="/img/singlethrusterfull.jpg" name="thumbnail" type="radio">
          <!-- <button class="btn-slider"><i class="fas fa-angle-right"></i></button> -->
          </div>
         </div>
       </div>
      <div class="SP_text" v-if="product">
        <h2>{{product.productSingleTitle}}</h2>
        <div class="price_single">
          <span>£ {{product.productPrice}}</span>
          <hr size="1" align="right" width="93%">
        </div>
        <h3 class="quick">QUICK OVERVIEW:</h3>
        <p class="quick_desc">{{product.productoverview}}</p>
        <hr size="1" align="right" width="93%">
        <ul class="pro_size">
          <h3>SIZE</h3>
          <li>
            <a href="#">25</a>
          </li>
          <li>
            <a href="#">26</a>
          </li>
          <li>
            <a href="#">27</a>
          </li>
          <li>
            <a href="#">28</a>
          </li>
          <li>
            <a href="#">29</a>
          </li>
          <li>
            <a href="#">30</a>
          </li>
          <li>
            <a href="#">31</a>
          </li>
          <li>
            <a href="#">32</a>
          </li>
          <li>
            <a href="#">33</a>
          </li>
        </ul>
        <ul class="pro_size">
          <hr size="1" align="right" width="93%">
          <h3>LENGTH</h3>
          <li>
            <a href="#">32</a>
          </li>
          <li>
            <a href="#">34</a>
          </li>
        </ul>
        <hr size="1" align="right" width="93%">
        <div class="single_product_flex_row">
          <ul class="product-qty">
            <span>Quantity:</span>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </ul>
          <div class="btn_ATC">
            <form>
              <input type="submit" value="ADD TO CART" href="#">
            </form>
          </div>
          <ul class="add_to_link">
            <li>
              <a href="#">+ Add to WishList</a>
            </li>
            <li>
              <a href="#">+ Add to Compare</a>
            </li>
            <li>
              <a href="#">+ Email to a Friend</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tabnav_position">
      <TabNav/>
    </div>
  </div>
  </template>

<script>
import axios from 'axios'
import TabNav from '@/components/TabNav.vue'
export default {
  name: 'ProductSingle',
  components: {
    TabNav
  },
  props: {
    maintitle: String
  },
  data () {
    return {
      product: null
    }
  },
  mounted () {
    this.getProductById()
  },
  methods: {
    getProductById () {
      let productId = this.$route.params.id
      console.log(typeof productId)
      axios
        .get('/productlist.json')
        .then(response => {
          this.product = response.data.products.find(p => p.id === productId)
          console.log(this.product)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
