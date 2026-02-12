<script lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  props: [''],

  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
  components: { AppHeader, AppFooter },
}
</script>

<template>
  <AppHeader />
  <div class="header-place-holder"></div>
  <RouterView />
  <div class="footer-place-holder"></div>
  <AppFooter />
</template>

<style >
body{
  font-family:Arial, Helvetica, sans-serif;
}
.header-place-holder{
  height: var(--header-h);
}
.footer-place-holder{
  height: var(--footer-h);
}
</style>
