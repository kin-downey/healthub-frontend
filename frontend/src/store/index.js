import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import Swal from "sweetalert2";
import router from "../router";

import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex);
const base_url = "http://localhost:8000";

export default new Vuex.Store({
  state: {
    access: "",
    refresh: "",
    pre_registed_email: "",
    is_login: "",
  },
  mutations: {
    set_access_token(state, data){
      state.access = data["access"];
    },
    set_token(state, data) {
      state.access = data["access"];
      state.refresh = data["refresh"];
      state.is_login = true
    },
    set_pre_email(state, data){
      state.pre_registed_email = data;
    },
    logout(state){
      state.access = ""
      state.refresh = ""
      state.pre_registed_email = ""
      state.is_login = false
    },
  },
  actions: {
    logout(context){
      router.push("/")
      context.commit("logout")
    },
    refresh_token(context, refresh){
      if (refresh != ""){
        const url = base_url + "/account/auth/jwt/refresh/"
        var data = new FormData();
        data.append("refresh", refresh)
        axios
        .post(url, data)
        .then(function(response){
          context.commit("set_access_token", response.data)
        })
        .catch(function(error){
          console.log(error);
        })
      }
    },
    login(context, credentials) {
      var FormData = require("form-data");
      var data = new FormData();
      data.append("email", credentials["email"]);
      data.append("password", credentials["password"]);

      const url = base_url + "/account/auth/jwt/create/";
      axios
        .post(url, data)
        .then(function (response) {
          context.commit("set_token", response.data);
          router.push("/graph");
        })
        .catch(function (error) {
          if (error.response.status == 401) {
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: "ユーザー名もしくはパスワード、または両方が間違っています",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            });
          }
        });
    },
    sign_up(context, credentials) {
      var FormData = require("form-data");
      var data = new FormData();

      data.append("name", credentials["name"]);
      data.append("email", credentials["email"]);
      data.append("password", credentials["password"]);
      data.append("re_password", credentials["re_password"]);


      const url = base_url + "/account/auth/users/";
      axios
        .post(url, data)
        .then(function (response) {
          context.commit("set_pre_email", response.data.email)
          router.push("/register")
        })
        .catch(function (error) {
          if (error.response.data.password[0] == "The password is too similar to the メールアドレス."){
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: "メールアドレスとパスワードが類似しています．\n他のパスワードを使用してください",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            });
          }
          else if (error.response.data.email[0] == "Enter a valid email address.") {
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: "正しいメールアドレスを入力してください",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            });
          }
          else if (error.response.data.email[0] == "user account with this メールアドレス already exists."){
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: "既に使用されているメールアドレスです．",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            });
          }
          else{
            Swal.fire({
              icon: "warning",
              title: "Error",
              text: "予期せぬエラーが発生しました．",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            });
          }
        });
    },
  },
  modules: {},
  plugins: [createPersistedstate({ key: 'healthub' })],
});
