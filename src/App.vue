<template>
  <Hello />
  <RouterView />
</template>

<script>
import Hello from './components/Hello';

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: 'Hello~',
    };
  },
};
</script>

<style>
h1 {
  color: red;
}
</style>
