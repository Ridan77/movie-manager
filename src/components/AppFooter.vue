<script lang="ts">
export default {
  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
}
</script>

<template>
  <Footer>
    <h4>Footer</h4>
    <p>All right reserved</p>
  </Footer>
</template>

<style scoped>
footer {
  position: fixed;
  inset: auto 0 0 0; /* top:0; right:0; bottom:auto; left:0 */
  height: var(--footer-h);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.2em 1em;
  background-color: var(--bg1);
  font-size: 0.8em;
  nav {
    display: flex;
    gap: 30px;
  }
}
</style>
