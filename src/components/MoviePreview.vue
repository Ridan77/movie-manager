<script lang="ts">
export default {
  props: {
    movie: { type: Object, required: true },
  },

  data() {
    return {}
  },

  computed: {},

  methods: {},

  created() {},
  unmounted() {},
  components: {},
}
</script>

<template>
  <div>{{ movie.title }}</div>
</template>

<style scoped></style>
