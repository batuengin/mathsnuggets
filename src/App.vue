<template lang="pug">
router-view(v-if="slides")
div(v-else)
  NavBar
  router-view
  website-footer
</template>

<script>
import { auth } from './auth.js'
import NavBar from './NavBar'
import WebsiteFooter from './WebsiteFooter'
import 'typeface-fira-sans'
import '@fortawesome/fontawesome-free/js/all.js'

export default {
  name: 'App',
  components: {
    NavBar,
    WebsiteFooter
  },
  computed: {
    slides () {
      return /^\/(resources\/.*\/.*\/.|slideshow)/.test(this.$route.path)
    }
  },
  mounted () {
    auth.isLoggedIn()
  }
}
</script>

<style lang="scss">
@charset "utf-8";
$body-font-size: 1.2em;
$body-weight: 300;
$family-sans-serif: "Fira Sans", sans-serif;
$primary: #172838;
$success: #3d6658;
$warning: #baa380;
$danger: #aa7582;
$weight-normal: 300;
$weight-medium: 300;
$weight-semibold: 400;
$weight-bold: 500;

@import "reveal.js/dist/reveal.css";
@import "~bulma/bulma.sass";
@import "~buefy/src/scss/buefy";
@import '~vue-context/src/sass/vue-context';
@import './highlight.css';

.title {
  font-weight: 400;
}
</style>
