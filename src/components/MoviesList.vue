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
    <li v-for="movie in movies" :key="movie.id">
      <MoviePreview :movie="movie" />
    </li>
  </ul>
</template>

<style scoped></style>
