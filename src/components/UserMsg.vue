<script lang="ts">
import { eventBus, type AppEvents } from '@/services/event-bus.service'
type Payload = AppEvents['user-msg']

export default {
  props: [''],

  data() {
    return {
      msg: {
        txt: '',
        type: '',
      },
    }
  },

  computed: {
    classList() {
      return {
        show: this.msg.txt,
        success: this.msg.type === 'success',
        error: this.msg.type === 'error',
      }
    },
  },

  methods: {
    showMsg(msg: Payload) {
      this.msg = msg
      console.log('msg', msg)
        setTimeout(() => (this.msg.txt = ''), 2000)
    },
  },

  created() {
    eventBus.on('user-msg', this.showMsg)
  },
  unmounted() {},
  components: {},
}
</script>

<template>
  <div class="user-msg" :class="classList">{{ msg.txt }}</div>
</template>

<style scoped>
.user-msg {
  position: fixed;
  top: 100px;
  right: -250px;
  padding: 1em 1.5em;
  border-radius: 1em;
  transition: 2s;
}
.user-msg.success {
  background-color: rgb(34, 215, 25);
}
.user-msg.error {
  background-color: rgb(203, 39, 69);
  color:black
}
.user-msg.show {
  right: 50px;
}
</style>
