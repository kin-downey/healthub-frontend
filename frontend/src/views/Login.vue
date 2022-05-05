<template>
  <v-container grid-list-md>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm8 lg4 md5>
        <v-card class="login-card">
          <v-card-title>
            <span class="headline">Login</span>
          </v-card-title>

          <v-spacer />

          <v-card-text>
            <v-layout
              row
              fill-height
              justify-center
              align-center
              v-if="loading"
            >
              <v-progress-circular :size="50" color="primary" indeterminate />
            </v-layout>

            <v-form v-else ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-text-field
                  v-model="credentials.email"
                  :counter="20"
                  label="メールアドレス"
                  maxlength="40"
                  required
                />

                <v-text-field
                  :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="credentials.password"
                  :counter="20"
                  label="パスワード"
                  :rules="rules.password"
                  :type="show_password ? 'text' : 'password'"
                  maxlength="20"
                  required
                  v-on:keydown.enter="login"
                  @click:append="show_password = !show_password"
                />
              </v-container>
              <v-btn class="pink white--text" :disabled="!valid" @click="login"
                >Login</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import Swal from "sweetalert2";
import router from "../router";
export default {
  name: "Login",
  data: () => ({
    show_password: false,
    credentials: {},
    valid: true,
    loading: false,
    rules: {
      username: [
        (v) => !!v || "ユーザー名は必須です",
        (v) =>
          (v && v.length > 4) || "ユーザー名は5文字以上でなければなりません",
        (v) =>
          /^[a-z0-9_]+$/.test(v) || "許可されていない文字が入力されています",
      ],
      password: [
        (v) => !!v || "パスワードは必須です",
        (v) =>
          (v && v.length > 4) || "パスワードは5文字以上でなければなりません",
      ],
    },
  }),
  mounted() {
    this.checkToken();
  },
  methods: {
    login() {
      const _this = this;
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch("login", this.credentials).then(function () {
          _this.loading = false;
        });
      }
    },
    checkToken() {
      if (this.$store.state.access != "") {
        router.push("/graph");
      }
    },
  },
};
</script>
