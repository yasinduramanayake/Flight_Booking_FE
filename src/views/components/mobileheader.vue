<template>
  <div>
    <div class="header_mobile_view">
      <div>
        <b-button
          v-b-toggle.sidebar-left
          variant="outline-none"
          size="sm"
          style="height: 30px; float: right"
        >
          <feather-icon icon="AlignJustifyIcon" size="25%" class="mr-50" />
        </b-button>

        <div class="largebreak"></div>
      </div>

      <b-sidebar
        id="sidebar-left"
        bg-variant="dark"
        text-variant="light"
        left
        backdrop
      >
        <b-nav vertical>
          <b-nav-item active href="/"> Home </b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/contact">Contact US</b-nav-item>
          <b-nav-item href="/careers">Careers</b-nav-item>
          <b-nav-item href="/projects">Projects</b-nav-item>
        </b-nav>
        <div class="mobile_dromdown">
          <b-dropdown
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            text="Services"
            variant="dark"
          >
            <b-dropdown-item href="/retails"> Retailers </b-dropdown-item>
            <b-dropdown-item href="/wholeseller"> Wholesaler </b-dropdown-item>
            <b-dropdown-item href="/management"> Management</b-dropdown-item>
            <b-dropdown-item href="/investors"> Investors</b-dropdown-item>
            <b-dropdown-item href="/developers"> Developers</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>
<script>
/* eslint-disable global-require */

import {
  VBToggle,
  BRow,
  BCol,
  BNav,
  BNavItem,
  BDropdown,
  BDropdownItem,
  BIcon,
  BButton,
  BSidebar,
  BListGroup,
  BListGroupItem,
} from "bootstrap-vue";

import Ripple from "vue-ripple-directive";
export default {
  name: "HeaderMobile",

  components: {
    BRow,

    BCol,
    BButton,
    BNav,
    BNavItem,
    BIcon,
    BDropdown,
    BDropdownItem,
    BSidebar,
    BListGroup,
    BListGroupItem,
    VBToggle,
  },
  directives: {
    "b-toggle": VBToggle,
    Ripple,
  },
};
</script>
