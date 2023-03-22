<template>
  <layout-full v-if="!data">
    <router-view />
  </layout-full>
</template>

<script>
import LayoutFull from "@core/layouts/layout-full/LayoutFull.vue";

export default {
  data() {
    return {
      // showCustomizer: $themeConfig.layout.customizer,
      data: localStorage.token,
    };
  },
  components: {
    LayoutFull,
  },
};
</script>
