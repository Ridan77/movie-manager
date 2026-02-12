<script lang="ts">
import type { Movie } from '@/services/movie.service.js'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    movie: { type: Object as PropType<Movie>, required: true },
  },

  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
  components: {},
})
</script>

<template>
  <li>
    <div class="card-header">
      <h4>{{ movie.title }}</h4>
      <p>{{ movie.releaseYear }}</p>
    </div>
    <img :src="movie.posterUrl" alt="" />
    <div class="actions">
      <button>Details</button>
  
      <button @click="$emit('delete', movie._id)">Delete</button>
    </div>
  </li>
</template>

<style scoped>
li {
  background-color: var(--bg1);
  padding: 1em;

  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3; /* must match number of auto-rows tracks above */
  img {
    margin: auto;
    height: 100%;
    object-fit: cover;
  }
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.actions {
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
  button {
    background-color: var(--bg2);
    padding: 0.2em 0.5em;
    border-radius: 0.5em;
    border: none;
    box-shadow:
      0 1px 2px rgba(0, 0, 0, 0.08),
      0 4px 12px rgba(0, 0, 0, 0.12);
  }
  button:hover {
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.12),
      0 8px 20px rgba(0, 0, 0, 0.18);
  }
}
</style>
