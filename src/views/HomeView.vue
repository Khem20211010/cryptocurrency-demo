<template>
  <div class="home">
    
    <el-button type="success" @click="$router.push({name:'mining'})">Start mining</el-button>
   <p>----------</p>
    <!-- <el-button type="success"  @click="$router.push({name:'transaction'})">New Transcation</el-button> -->
    <el-button type="success"  @click="$router.push({name:'chain'})">Get chain information</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
}
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
