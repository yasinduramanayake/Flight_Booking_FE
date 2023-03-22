<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="footer_row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="/about">about us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get help</h4>
          <ul>
            <li><a href="/contact">Contact US</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Latest News</h4>
          <ul>
            <li><a href="#">Most Popoular Retailers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"> <feather-icon icon="FacebookIcon" /></a>
            <a href="#"><feather-icon icon="TwitterIcon" /></a>
            <a href="#"><feather-icon icon="InstagramIcon" /></a>
          </div>
        </div>
      </div>
      <p class="clearfix mb-0">
        <span
          class="float-md-left d-block d-md-inline-block mt-25 footer_date_color"
        >
          COPYRIGHT © {{ new Date().getFullYear() }}
          <b-link
            class="ml-25"
            href="https://1.envato.market/pixinvent_portfolio"
            target="_blank"
            >
          </b-link>
          <span class="d-none d-sm-inline-block">, All rights Reserved</span>
        </span>
      </p>
      <div class="largebreak"></div>
    </div>
  </footer>
</template>

<script>
import { BLink } from "bootstrap-vue";
export default {
  name: "FooterPage",
  components: {
    BLink,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

body {
  line-height: 1.5;
  font-family: Poppins, sans-serif;
}
.footer_date_color {
  color: white;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer_container {
  max-width: 1170px;
  margin: auto;
}

.footer_row {
  display: flex;
  flex-wrap: wrap;
}

ul {
  list-style: none;
}

.footer {
  background-color: #24262b;
  padding: 70px 0;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}

.footer-col h4 {
  font-size: 18px;
  color: #fff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}

.footer-col h4::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: #e91e63;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}

.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}

.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}

.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 20%);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.5s ease;
}

.footer-col ul li a:hover {
  color: #fff;
  padding-left: 8px;
}

.footer-col .social-links a:hover {
  color: #24262b;
  background-color: #fff;
}

/* responsive */

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>
