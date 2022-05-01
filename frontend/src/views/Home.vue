<template>
  <div class="home">
    <AppBar />
    <Navigation />
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: "Home",
  components: {
    AppBar,
    Navigation
  },
};
</script>
