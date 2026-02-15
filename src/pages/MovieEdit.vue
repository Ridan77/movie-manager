<script lang="ts">
import Loader from '@/components/Loader.vue';
import { movieService, type Movie } from '@/services/movie.service.js'

type dataType = {
  movie: Movie | null
  isLoading: boolean
}
export default {
  data(): dataType {
    return {
      movie: null,
      isLoading: false,
    }
  },

  computed: {
    actors() {
      return this.movie?.actors.join(',')
    },
  },

  methods: {
    async onSubmit() {
      if (!this.movie) return
      try {
        const updatedMovie = await movieService.save(this.movie)
        this.$router.push('/movie')
        return updatedMovie
      } catch (error) {
        console.log(error)
      }
    },
    async onGetPoster() {
      if (this.movie) {
        this.isLoading = true
        try {
          this.movie.posterUrl = await movieService.getMoviePoster(this.movie.title)
          console.log('this.movie.posterUrl', this.movie.posterUrl)
        } catch (error) {
          console.log(error)
        } finally {
          this.isLoading = false
        }
      }
    },
  },

  async created() {
    const movieId = this.$route.params.id
    if (movieId) {
      try {
        this.movie = await movieService.get(movieId)
      } catch (error) {
        console.log(error)
      }
    } else {
      this.movie = movieService.getEmptyMovie()
    }
  },
  unmounted() {},
  components:{Loader}
}
</script>

<template>
  <form @submit.prevent="onSubmit" v-if="movie" class="movie-edit">
    <img class="movie-img" v-if="movie.posterUrl && !isLoading" :src="movie.posterUrl" alt="" />
    <Loader v-if="isLoading" />
    <button
      class="get-poster"
      v-if="!movie.posterUrl"
      :disabled="!movie.title"
      @click="onGetPoster"
      type="button"
    >
      Get Poster
    </button>
    <div class="info">
      <p>Title</p>
      <input type="text" v-model="movie.title" />
      <p>Director</p>
      <input type="text" v-model="movie.director" />
      <p>Year</p>

      <input type="text" v-model="movie.releaseYear" />
      <p>Runtime</p>
      <input type="text" v-model="movie.runningTime" />
      <p>Genre</p>
      <input type="text" v-model="movie.genre" />
      <p>Actors</p>
      <input type="text" v-model="movie.actors" />
    </div>
    <div class="actions">
      <RouterLink to="/movie">
        <button type="button">Back</button>
      </RouterLink>
      <button v-if="movie.posterUrl" type="button" @click="onGetPoster">Update poster</button>
      <button>Submit</button>
    </div>
  </form>
</template>

<style scoped>
.movie-edit {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  .movie-img {
    justify-self: end;
    max-width: 100%;
  }
  .get-poster {
    width: 100px;
    height: 50px;
    place-self: center;
  }

  .info {
    display: grid;
    grid-template-columns: 50px auto;
    align-items: center;
    justify-content: start;
    padding: 0 1em;
    gap: 1em;
    input {
      border: none;
      width: auto;
      background-color: var(--bg2);
      height: 2lh;
      border-radius: 0.5em;
      color: inherit;
    }
    .actors {
      align-self: end;
      margin: 0;
    }
  }
  .actions {
    grid-column: 1/-1;
    display: flex;
    justify-content: center;
    gap: 1em;
    button {
      width: 150px;
    }
  }
}
</style>
