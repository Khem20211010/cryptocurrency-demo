<template>
  <div class="home">
    <div class="box">
     <code> {{ info }}</code>
    </div>
    <el-button type="primary" @click="$router.go(-1)">Back</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getmine } from "../config/api";
export default {
  name: "MinNing",
  data() {
    return {
      info: "No data",
    };
  },
  created() {
    this.getmines();
  },
  methods: {
    //请求接口getmine
    getmines() {
      getmine().then((res) => {
        this.info=res;
      this.$message({message:res.message,type:'success'})
      }).catch(()=>{
        this.$message('Request failed')
      });
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
  .box {
    border: 1px solid #000;
    height: 500px;
    width: 650px;
    text-align: center;
    padding: 10px;
    background-color: #000;
    color: rgb(211, 210, 113);
    font-size: 16px;
    margin-bottom: 10px;
    overflow: auto;
  }
}
</style>
