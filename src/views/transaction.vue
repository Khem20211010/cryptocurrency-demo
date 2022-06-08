<template>
  <div class="home">
    <div>txIns</div>

    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :inline="true"
      v-for="(ruleForm, index) in list"
      :key="index"
    >
      <div v-for="(ruleForm, index) in ruleForm.txIns" :key="index">
        <el-form-item label="txOutId" prop="txOutId">
          <el-input
            type="password"
            v-model="ruleForm.txOutId"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="txOutIndex" prop="txOutIndex">
          <el-input
            type="password"
            v-model="ruleForm.txOutIndex"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          v-if="ruleForm.signature"
          label="encryptMsg"
          prop="encryptMsg"
        >
          <el-input
            type="password"
            v-model="ruleForm.signature.encryptMsg"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="ruleForm.signature" label="rawMsg" prop="rawMsg">
          <el-input
            type="password"
            v-model="ruleForm.signature.rawMsg"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </div>
    </el-form>
    <div>txOut</div>
    <el-form
      :model="ruleForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      :inline="true"
      v-for="(ruleForm, index) in list"
      :key="index"
    >
      <div v-for="(ruleForm, index) in ruleForm.txOut" :key="index">
        <el-form-item label="address" prop="address">
          <el-input
            type="text"
            v-model="ruleForm.address"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="amount" prop="amount">
          <el-input
            type="text"
            v-model="ruleForm.amount"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </div>
    </el-form>
    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
    <el-button @click="$router.go(-1)">Back</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { posttransaction } from "../config/api";
export default {
  name: "TransacTion",
  data() {
    return {
      info: "无数据",
      list: [],
      ruleForm: {
        txIns: {
          txOutId: "",
          txOutIndex: "",
          signature: {
            encryptMsg: "",
            rawMsg: "",
          },
        },
        txOut: {
          amount: "",
          address: "",
        },
      },
    };
  },
  created() {
   let lists = this.$route.params.transactions;
    this.list = lists;
  
  },
  methods: {
    //请求接口posttransaction
    posttransactions() {
      posttransaction(this.list[0])
        .then((res) => {
          this.$message("成功");
          this.info = res;
        })
        .catch(() => {
          this.$message("请求失败");
        });
    },
    //执行提交 
    submitForm(formName) {
      //指向当前方法
      this.posttransactions();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .box {
    border: 1px solid #000;
    height: 500px;
    width: 500px;
    text-align: center;
  }
}
</style>
