<template>
  <div class="test">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "AslTest",
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
