declare module '@/services/movie.service.js' {
  export type Movie = {
    id: string // Unique identifier
    title: string // Movie title
    director: string // Director's name

    posterUrl: string // You can use a defualt posterUrl for now.
    runningTime: number // Running time in minutes
    releaseYear: number // Year of release
    actors: string[] // Array of actor names
    genre: string // Genre of the movie
  }
  export const movieService: {
    query(): Promise<Movie[]>
    // add other methods here if you have them
  }
}

