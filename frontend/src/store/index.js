import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);
// const base_url = "http://localhost:8000";

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {},
  actions: {
    login(context) {
      console.log(context);
      var FormData = require("form-data");
      var data = new FormData();
      data.append("email", "hello@hello.co.jp");
      data.append("password", "testpassword");

      var config = {
        method: "post",
        url: "http://localhost:8000/api/auth/jwt/create/",
        headers: {
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

      // const url = base_url + "/api/auth/jwt/create/";
      // axios
      //   .post(url, credentials)
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });
      // console.log(context);
    },
  },
  modules: {},
});
