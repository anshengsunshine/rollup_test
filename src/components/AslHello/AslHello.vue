<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "AslHello",
  data() {
    return {
      msg: "hello lib !",
    };
  },
};
</script>

<style scoped lang="less">
.hello {
  color: red;
}
</style>
