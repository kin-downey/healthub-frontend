<template>
  <v-app>
    <div v-if="is_login">
      <v-navigation-drawer app v-model="drawer">
        <v-list-item>
          <v-list-item-title class="title"> Healthub </v-list-item-title>
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider />
        <v-list nav>
          <v-list-item
            v-for="menu in logged_in_menus"
            :key="menu.title"
            :to="menu.url"
            @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-row>
          <v-col align="center" cols="11">
            <v-btn
              @click="drawer = false"
              to="/signup"
              color="#EF5350"
              block
              class="white--text mx-2 mt-12 my-2"
              >無料で始めましょう</v-btn
            >
            <v-btn
              @click="drawer = false"
              to="/login"
              block
              outlined
              class="mx-2"
              >ログイン</v-btn
            >
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </div>
    <div v-else>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item>
          <v-list-item-title class="title"> Healthub </v-list-item-title>
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider />
        <v-list nav>
          <v-list-item
            v-for="menu in public_menus"
            :key="menu.title"
            :to="menu.url"
            @click="drawer = false"
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-row>
          <v-col align="center" cols="11">
            <v-btn
              @click="drawer = false"
              to="/signup"
              color="#EF5350"
              block
              class="white--text mx-2 mt-12 my-2"
              >無料で始めましょう</v-btn
            >
            <v-btn
              @click="drawer = false"
              to="/login"
              block
              outlined
              class="mx-2"
              >ログイン</v-btn
            >
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </div>

    <v-app-bar app color="#E64A19">
      <v-app-bar-nav-icon @click="drawer = true" color="white" />
      <v-toolbar-title class="font-weight-bold white--text"
        >Healthub</v-toolbar-title
      >
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    is_login: false,
    drawer: false,
    public_menus: [
      { title: "トップページ", icon: "mdi-web", url: "/" },
      {
        title: "About",
        icon: "mdi-information-outline",
        url: "/about",
      },
    ],
    logged_in_menus: [
      { title: "トップページ", icon: "mdi-web", url: "/" },
      { title: "ホーム", icon: "mdi-home", url: "/home" },
      { title: "データ", icon: "mdi-chart-line", url: "/graph" },
      {
        title: "フレンド",
        icon: "mdi-account-group",
        url: "/friends",
      },
      {
        title: "About",
        icon: "mdi-information-outline",
        url: "/about",
      },
    ],
  }),
  mounted() {
    this.checkToken();
  },
  methods: {
    checkToken() {
      if (this.$store.state.access != "") {
        this.is_login = true;
      }
    },
  },
};
</script>
