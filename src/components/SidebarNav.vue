<template>
<div class="asidebar">
        <div id="navigation" class="sidebar-wrapper">
        <button class="menu_button" v-on:click="openMenu">
        <i class="fas fa-bars hamburger icon"></i>MENU</button>
        <ul>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">APPAREL</a></li>
            <li><a href="#">SURF APPAREL</a></li>
            <li><a href="#">WINDSURF</a></li>
            <li><a href="#">KITESURF</a></li>
            <li><a href="#">ACCESSORIES</a></li>
            <li><a href="#">SALE</a></li>
            <li><a href="#">BRANDS</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">GADGETS</a></li>
            <li><router-link to="/Contact">CONTACT</router-link></li>
        </ul>
    </div>
     </div>
  </template>

<script>
export default {
  name: 'SidebarNav',
  methods: {
    openMenu: function () {
      var menu = document.getElementById('navigation')
      if (menu.className === 'sidebar-wrapper') {
        menu.className += ' responsive'
      } else {
        menu.className = 'sidebar-wrapper'
      }
    }
  }
}
</script>
