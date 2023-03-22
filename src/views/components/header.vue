<template>
  <div class="header_web_view">
    <div class="web-header-background">
      <div>
        <b-container >
          <li class="dropdown">
            <div class="menu_item_text">
              <span class="menu_item_text_size">Our Services</span>
            </div>
            <div class="dropdown-content">
              <a href="/retails" class="menu_item_text"
                ><span class="menu_item_text_size">Retailers</span></a
              >
              <a href="/wholeseller" class="menu_item_text"
                ><span class="menu_item_text_size">Wholesaler</span></a
              >
              <a href="/management" class="menu_item_text"
                ><span class="menu_item_text_size">Management</span></a
              >
              <a href="/investors" class="menu_item_text"
                ><span class="menu_item_text_size">Investors</span></a
              >
              <a href="/developers" class="menu_item_text"
                ><span class="menu_item_text_size">Developers</span></a
              >
            </div>
          </li>
          <b-row>
            <b-col md="6">
              <div class="extra_small_break1"></div>
              <h2 class="header_left_allignment_text">
                <b-img src="@/assets/images/logo/logo.png"></b-img>
                <span class="text_size">Name</span>
              </h2>
            </b-col>

            <b-col md="6">
              <ul class="horizontal">
                <div class="nevbar_allignment">
                  <li>
                    <a href="/" class="menu_item_text"
                      ><span class="menu_item_text_size">Home</span></a
                    >
                  </li>
                  <li>
                    <a href="/about" class="menu_item_text"
                      ><span class="menu_item_text_size">About</span></a
                    >
                  </li>

                  <li>
                    <a href="/contact" class="menu_item_text"
                      ><span class="menu_item_text_size">Contact Us</span></a
                    >
                  </li>
                  <li>
                    <a href="/careers" class="menu_item_text"
                      ><span class="menu_item_text_size">Careers</span></a
                    >
                  </li>
                  <li>
                    <a href="/projects" class="menu_item_text"
                      ><span class="menu_item_text_size">Our Projects</span></a
                    >
                  </li>
                </div>
              </ul>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable global-require */
import {
  BRow,
  BCol,
  BContainer,
  BImg,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
export default {
  name: "HeaderPage",

  components: {
    BRow,
    BDropdown,
    BDropdownItem,
    BImg,
    BCol,
    BContainer,
  },
};
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 10;
  overflow: hidden;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 22px;
  text-decoration: cornsilk;
  font-size: 15px;
}

.horizontal li a {
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 22px;
  text-decoration: cornsilk;
  font-size: 15px;
}
li a:hover:not(.active) {
  background-color: rgb(122, 147, 160);
}
.active {
  background-color: #04aa6d;
}

.dropdown {
  position: relative;
  padding-top: 14px;
  float: right;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(0, 0, 0);

  max-width: 134px;
  z-index: 1;
}
.dropdown:hover {
  background-color: rgb(122, 147, 160);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
