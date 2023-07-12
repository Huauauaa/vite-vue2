<template>
  <div>
    <hello-world></hello-world>
    <el-button type="primary">主要按钮</el-button>
    <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld },
}
</script>

<style scoped lang="scss">
$primaryColor: lightBlue;

div {
  background-color: $primaryColor;
}
</style>
