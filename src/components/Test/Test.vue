<template>
  <div class="test">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      msg: "test lib !",
    };
  },
};
</script>

<style scoped lang="less">
.test {
  color: green;
}
</style>
