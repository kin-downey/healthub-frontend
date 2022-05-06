<template>
  <div class="wait-email">
    <v-card class="mx-auto mt-10" max-width="95%">
      <v-card-text>
        <p class="text-h5 text--primary">
          {{ email }}へ<br />メールを送信しました
        </p>
        <div class="text--primary">
          <br />
          メールが届きませんか？以下をご確認ください<br />
          <br />
          ・表示されているメールアドレスは正しいですか？<br />
          ・迷惑メールボックスに入っていませんか？<br />
          <br />
          もしくは，「メールを再送信」」ボタンを押してください
        </div>
      </v-card-text>
      <v-card-actions>
        <v-col align="end">
          <v-btn @click="resend_email()" text color="primary">
            メールを再送信
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
    <v-snackbar v-model="snackbar" top color="success">
      <v-row align-content="center">
        <v-col align="center">
          <p class="text-h6 mt-4">メールを再送信しました</p>
        </v-col>
      </v-row>

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
          height="auto"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
    };
  },
  computed: {
    email() {
      return this.$store.state.pre_registed_email;
    },
  },
  methods: {
    resend_email() {
      const _this = this;
      this.$store
        .dispatch("resend_email", this.$store.state.pre_registed_email)
        .then(function () {
          _this.snackbar = true;
        });
    },
  },
};
</script>
