<template>
  <v-app>
    <v-main>
      <line-example
        :chart-id="chartId"
        :width="width"
        :height="height"
        :css-classes="cssClasses"
        :styles="styles"
        :plugins="plugins"
      />
    </v-main>
  </v-app>
</template>

<script>
import router from "../router"
import LineExample from "./LineExample";

export default {
  name: "LineChart",
  components: {
    LineExample,
  },
  mounted() {
    this.checkToken();
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => {},
    },
  },
  methods: {
    checkToken() {
      if (this.$store.state.access === "") {
        router.push("/login");
      }
    },
  },
};
</script>
