<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello~",
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
