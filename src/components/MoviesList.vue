<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import MoviePreview from './MoviePreview.vue'
import type { Movie } from '@/services/movie.service.js'

export default defineComponent({
  components: { MoviePreview },

  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },

  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
})
</script>

<template>
  <ul>
    <MoviePreview
      @delete="$emit('delete',$event)"
      v-for="movie in movies"
      :key="movie._id"
      :movie="movie"
    />
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: auto 240px auto; /* header row + image row  +actions */
  gap: 1em;
  list-style: none;
}
</style>
