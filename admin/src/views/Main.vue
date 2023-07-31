<template>
<el-container>
  <!-- 左侧栏 -->
  <el-aside width="200px">
    菜单
  </el-aside>
  
  <el-container>
    <!-- 头部 -->
    <el-header>
      后台管理界面
    </el-header>
    <el-main>
      <!-- 路由页面出口 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
 export default {
  data(){
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item)
    }
  }
 }
</script>

<style lang="less">

</style>