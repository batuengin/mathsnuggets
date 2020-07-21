<template lang="pug">
div.box
  h2.title
    .columns.is-vcentered
      .column.slide-title(
        @blur="$emit('update:title', $event.target.innerText)"
        @keydown.enter.prevent="$event.target.blur()"
        contenteditable
        v-text="title"
      )
      .column.is-narrow.date
        div {{ today }}
        div {{ time }}
      .column.is-narrow(v-if="!authState.loggedIn")
        b-icon(
          pack="fas"
          icon="sign-in-alt"
          @click="login"
        )
</template>

<script>
import 'typeface-fira-sans'
import { auth } from './auth.js'
var moment = require('moment')

export default {
  props: {
    title: String
  },
  data () {
    return {
      authState: auth.state,
      today: moment().format('dddd Do MMM'),
      interval: false,
      time: moment().format('hh:mm a')
    }
  },
  mounted () {
    this.updateTime()
    this.interval = setInterval(this.updateTime, 1000)
  },
  methods: {
    updateTime () {
      this.time = moment().format('h.mma')
    }
  }
}
</script>

<style scoped>
div h2 {
  background-color: #172838;
  color: #ebf0ef;
  font-size: 3em;
  margin-bottom: 0.5em;
  padding: 0.2em;
}
.date {
  font-size: 0.5em;
  font-weight: 300;
  text-align: right;
  margin-right: 0.4em;
}
.box {
  padding: 0;
}
</style>
