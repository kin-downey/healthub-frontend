<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title"> Healthub </v-list-item-title>
        <v-btn icon @click="drawer = false">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url" @click="drawer = false">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#E64A19">
      <v-app-bar-nav-icon @click="drawer = true" color="white" />
      <v-toolbar-title class="font-weight-bold white--text">Healthub</v-toolbar-title>
    </v-app-bar>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    menus: [
      { title: "トップページ", icon: "mdi-web", url: "/" },
      { title: "ホーム", icon: "mdi-home", url: "/home" },
      { title: "フレンド", icon: "mdi-account-group", url: "/friends" },
      { title: "About", icon: "mdi-information-outline", url: "/about" },
    ],
  }),
  methods: {
  },
};
</script>
