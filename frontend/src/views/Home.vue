<template>
  <div class="home">
    <p>this is a home page</p>
  </div>
</template>

<script>
import router from '../router';

export default {
  name: "Home",
  mounted() {
    this.checkToken();
  },
  components: {
  },
  methods: {
    checkToken(){
      if (this.$store.state.access === ""){
        router.push("/auth");
      }
    }
  }
};
</script>
