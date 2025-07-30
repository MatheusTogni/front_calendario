<template>
  <v-snackbar
    v-model="show"
    anchor="top end"
    location="top"
    :color="color"
    :timeout="timeout"
    elevation="6"
    rounded
  >
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      show: false,
      message: "",
      timeout: 3000,
      color: "primary",
    };
  },
  methods: {
    showToast(msg, type) {
      this.message = msg;
      this.color = this.getColorByType(type);
      this.show = true;
    },
    getColorByType(type) {

      switch (type) {
        case "success":
          return "purple lighten-1";
        case "error":
          return "red lighten-1";
        case "warning":
          return "orange lighten-1";
        case "info":
        default:
          return "blue lighten-1";
      }
    },
  },
};
</script>
