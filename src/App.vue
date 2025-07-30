<template>
  <v-app>
    <router-view />
    <Toast ref="toastRef" />
  </v-app>
</template>

<script>
import Toast from "@/components/Toast.vue";

export default {
  components: { Toast },
  data() {
    return {
      toastRef: null,
    };
  },
  methods: {
    showToast(msg, type) {
      if (this.$refs.toastRef) {
        this.$refs.toastRef.showToast(msg, type);
      }
    },
  },
};
</script>
