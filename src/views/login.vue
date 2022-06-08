<template>
  <div class="home">
    <el-button type="primary" @click="gohome('A')">I'm miner A</el-button>
    <el-button type="primary" @click="gohome('B')"
      >I'm miner B</el-button
    >
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LoGin",
  methods: {
    gohome(v) {
      //按钮点击 v判断点击的哪个
      if (v == "A") {
        sessionStorage.setItem('port',5000) //存入浏览器缓存，port 5000，之后以读取
        this.$message('登录成功') //弹出登录成功
        this.$router.push({ name: "home" }); //路由跳转
        return;
      }
      if (v == "B") {
         sessionStorage.setItem('port',5001)
           this.$message('登录成功')
        this.$router.push({ name: "home" });
        return;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
