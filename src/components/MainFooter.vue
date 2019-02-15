<template>
    <div id="footer">
        <footer>
            <div class="container">
                <ul class="main-ul">
                    <h3>Category</h3>
                    <li><router-link to="/">Home</router-link></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Eshop</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">New collections</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><router-link to="/Contact">Contact</router-link></li>
                </ul>
                <ul class="main-ul">
                    <h3>Our Account</h3>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Personal information</a></li>
                    <li><a href="#">Addresses</a></li>
                    <li><a href="#">Discount</a></li>
                    <li><a href="#">Orders history</a></li>
                    <li><a href="#">Addresses</a></li>
                    <li><a href="#">Search Terms</a></li>
                </ul>
                <ul class="main-ul">
                    <h3>Our Support</h3>
                    <li><a href="#">Site Map</a></li>
                    <li><a href="#">Search Terms</a></li>
                    <li><a href="#">Advanced Search</a></li>
                    <li><a href="#">Mobile</a></li>
                    <li><router-link to="/Contact">Contact Us</router-link></li>
                    <li><a href="#">Mobile</a></li>
                    <li><a href="#">Addresses</a></li>
                </ul>
                <ul>
                    <h3>Newsletter</h3>
                    <p>Join thousands of other people subscribe to our news</p>
                    <form>
                        <input type="text" name="email" value="INSERT EMAIL">
                        <input type="submit" value="SUBMIT">
                    </form>
                    <div class="payments-img">
                        <img src="../assets/images/payment/aex.png" alt="">
                        <img src="../assets/images/payment/mastercard.png" alt="">
                        <img src="../assets/images/payment/maestero.png" alt="">
                        <img src="../assets/images/payment/paypal.png" alt="">
                        <img src="../assets/images/payment/visa_straight.png" alt="">
                    </div>
                </ul>
                <ul>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                    <div class="aboutus">
                    <li>Phone: <a href="#">-999-342-9876</a></li>
                    <li>Email: <a href="#"><span class="email-color">info@surfhouse.com</span></a></li>
                    </div>
                </ul>
            </div>
        </footer>
        <div class="footer-copyright">
            <div class="container">
                <p><span>&#9400;</span> 2018 SURFHOUSE</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>
