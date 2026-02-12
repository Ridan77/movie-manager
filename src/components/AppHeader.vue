<script lang="ts">
export default {
}
</script>

<template>
  <header>
    <h2>Movie Manager</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/movie">Movies</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  inset: 0 0 auto 0; /* top:0; right:0; bottom:auto; left:0 */
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:  0 1em;
  background-color: var(--bg1);
  nav{
    display: flex;
    gap:30px;
  }
}
</style>
