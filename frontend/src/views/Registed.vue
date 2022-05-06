<template>
  <div class="registed">
    <v-row>
      <v-col align="center">
        <p class="text-h6 mt-12">
          ユーザー登録が完了しました！<br/>こちらからログインしてください
        </p>
      </v-col>
    </v-row>
    <Login />
  </div>
</template>
<script>
import Login from "./Login.vue";
export default {
  components: {
    Login,
  },
};
</script>
