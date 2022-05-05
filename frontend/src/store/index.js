import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import Swal from "sweetalert2";
import router from "../router";


Vue.use(Vuex);
const base_url = "http://localhost:8000";

export default new Vuex.Store({
  state: {
    access: "",
    refresh: "",
  },
  mutations: {
    set_token(state, data) {
      state.access = data["access"];
      state.refresh = data["refresh"];
    },
  },
  actions: {
    login(context, credentials) {
      var FormData = require("form-data");
      var data = new FormData();
      data.append("email", credentials["email"]);
      data.append("password", credentials["password"]);

      const url = base_url + "/api/auth/jwt/create/";
      console.log(data);
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
      console.log(context);
    },
  },
  modules: {},
});
