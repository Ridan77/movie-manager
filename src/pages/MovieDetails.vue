<script lang="ts">
import { movieService } from '@/services/movie.service.js'
import type { Movie } from '@/services/movie.service.js'

type dataType = {
  movie: Movie | null
}

export default {
  data(): dataType {
    return {
      movie: null,
    }
  },

  computed: {
    actors() {
      return this.movie?.actors.join(',')
    },
  },

  methods: {},
  async created() {
    const movieId = this.$route.params.id
    this.movie = await movieService.get(movieId)
  },
  unmounted() {},
  components: {},
}
</script>

<template>
  <section v-if="movie" class="movie-details">
    <img :src="movie.posterUrl" alt="" />
    <div class="info">
      <h2>{{ movie.title }}</h2>
      <h3>{{ movie.director }}</h3>
      <h3>{{ movie.releaseYear }}</h3>
      <p>{{ movie.runningTime }} minutes runtime</p>
      <p>Genre: {{ movie.genre }}</p>
      <p class="actors">Actors: {{ actors }}</p>
    </div>
    <RouterLink to="/movie">
      <button>Back</button>
    </RouterLink>
  </section>
</template>

<style scoped>
.movie-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  .info {
    display: grid;
    padding: 0 1em;
    .actors {
      align-self: end;
      margin: 0;
    }
  }
  a {
    grid-column: 1/-1;
    justify-self: center;
    button {
      width: 200px;
    }
  }
}
</style>
