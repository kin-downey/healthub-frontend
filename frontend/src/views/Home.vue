<template>
  <div class="home">
    <AppBar />
    <v-btn @click="test()">vuex test</v-btn>
  </div>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: "Home",
  components: {
    AppBar,
  },
  methods: {
    test() {
      const credentials = {}
      credentials["email"] = "kinchan@gmail.com";
      credentials["password"] = "kinahcn1216"
      this.$store.dispatch("login", credentials);
    }
  }
};
</script>
