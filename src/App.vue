<script lang="ts">
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
import UserMsg from './components/UserMsg.vue';

export default {

  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
  components: { AppHeader, AppFooter,UserMsg },
}
</script>

<template>
  <AppHeader />
  <div class="header-place-holder"></div>
  <UserMsg/>
  <RouterView />
  <div class="footer-place-holder"></div>
  <AppFooter />
</template>

<style >
body{
  font-family:Arial, Helvetica, sans-serif;
  color:var(--text);
}
.header-place-holder{
  height: var(--header-h);
}
.footer-place-holder{
  height: var(--footer-h);
}
</style>
