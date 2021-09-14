<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: "hello lib !",
    };
  },
};
</script>

<style scoped>
.hello {
  color: red;
}
</style>
