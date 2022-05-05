<template>
  <v-container grid-list-md>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm8 lg4 md5>
        <v-card class="login-card">
          <v-card-title>
            <span class="headline">新規登録</span>
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
                  v-model="credentials.name"
                  :counter="40"
                  label="ユーザー名"
                  maxlength="40"
                  required
                />
                <v-text-field
                  v-model="credentials.email"
                  :counter="40"
                  label="メールアドレス"
                  maxlength="40"
                  required
                />

                <v-text-field
                  :append-icon="show_password_1 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="credentials.password"
                  :counter="20"
                  label="パスワード"
                  :rules="rules.password"
                  :type="show_password_1 ? 'text' : 'password'"
                  maxlength="20"
                  required
                  @click:append="show_password_1 = !show_password_1"
                  @change="check_re_password()"
                />
                <v-text-field
                  :append-icon="show_password_2 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="credentials.re_password"
                  :counter="20"
                  label="再パスワード"
                  :rules="rules.re_password"
                  :type="show_password_2 ? 'text' : 'password'"
                  maxlength="20"
                  required
                  v-on:keydown.enter="signup"
                  @click:append="show_password_2 = !show_password_2"
                  @change="check_re_password()"
                />
              </v-container>
              <v-row>
                <v-col align="center">
                  <div v-show="!valid">
                    <v-btn class="pink white--text" disabled>Sign up</v-btn>
                  </div>
                  <div v-show="valid">
                    <v-btn class="pink white--text" @click="signup"
                      >Sign up</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
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
    show_password_1: false,
    show_password_2: false,
    credentials: {},
    valid: false,
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
          (v && v.length > 7) || "パスワードは8文字以上でなければなりません",
      ],
      re_password: [
        (v) => !!v || "再パスワードは必須です",
        (v) =>
          (v && v.length > 7) || "パスワードは8文字以上でなければなりません",
      ],
    },
  }),
  mounted() {
    this.check_re_password();
    this.checkToken();
  },
  computed: {},
  methods: {
    signup() {
      const _this = this;
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch("sign_up", this.credentials).then(function () {
          _this.loading = false;
        });
      }
    },
    checkToken() {
      if (this.$store.state.access != "") {
        router.push("/graph");
      }
    },
    check_re_password() {
      if (
        this.credentials.password != undefined &&
        this.credentials.password == this.credentials.re_password
      ) {
        this.valid = true;
      } else {
        this.valid = false;
      }
    },
  },
};
</script>
