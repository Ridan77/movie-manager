<script lang="ts">
import type { FilterBy } from '@/pages/MovieIndex.vue'
import { defineComponent, type PropType } from 'vue'
import { debounce } from '@/services/util.service.js'
type EmitFilterChangeDebounced = (val: FilterBy) => void

type filterDataType = {
  filterBy: FilterBy
  emitFilterChangeDebounced: EmitFilterChangeDebounced | null
}
export default defineComponent({
  props: {
    filterByProp: { type: Object as PropType<FilterBy>, required: true },
  },
  data(): filterDataType {
    return {
      filterBy: { ...this.filterByProp },
      emitFilterChangeDebounced: null,
    }
  },
  watch: {
    filterBy: {
      deep: true,
      handler(newVal: FilterBy) {
        this.emitFilterChangeDebounced?.(newVal)
      },
    },
  },
  computed: {},

  methods: {},

  created() {
    this.emitFilterChangeDebounced = debounce((val: FilterBy) => {
      this.$emit('filterChange', { ...val })
    }, 500)
  },
  unmounted() {},
  components: {},
})
</script>

<template>
  <section class="filter-cmp">
    <fieldset>
      <legend>Filter Settings</legend>

      <input class="text-input" placeholder="Search..." v-model="filterBy.txt" />
      <div class="runtime">
        <input
        id="runtime"
        :title="String(filterBy.maxRunTime ?? '')"
        type="range"
        min="60"
        max="240"
        v-model.number="filterBy.maxRunTime"
        />
        <label for="runtime">Runtime (min)</label>
      </div>
    </fieldset>
  </section>
</template>

<style scoped>
fieldset {
  display: grid;
  grid-template-columns: 200px auto;
  gap: 1em;
  .text-input {
    border: none;
    background-color: var(--bg2);
    padding: 0.5em;
  }
  .runtime{
    display: flex;
    align-items: center;
    gap :1em;
  }
}
</style>
