<template>
    <div id="header">
        <nav>
            <div class="header-container">
                <div class="main-logo">
                     <router-link to="/">
                    <img src="../assets/images/surfhouse-logo.png" alt="">
                     </router-link>
                </div>
                <div class="basket-wrapper">
                    <div class="login">
                        <button>LOG IN</button>
                        <button>WISH LIST (0)</button>
                    </div>
                    <div class="basket">
                        <img src="../assets/images/icon-cart.png" alt="">
                        <div class="details">
                            <div class="detailsprice"><p>€1,459.50</p></div>
                            <div class="detailsitem"><p>2 items</p></div>
                        </div>
                    </div>
                    <div class="checkout">
                         <button class="checkout-viewcart">VIEW CART</button>
                         <button class="checkout-checkout">CHECKOUT</button>
                    </div>
                    <div class="search-container">
                        <form>
                        <input type="text" placeholder="SEARCH" name="search">
                        <!-- <label><i class="fas fa-times"></i></label> -->
                        <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>
