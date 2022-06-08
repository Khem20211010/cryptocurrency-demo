<template>
  <div class="home">
    <div class="box">
      <el-table :data="info.chain" style="width: 100%">
        <el-table-column label="difficulty" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.difficulty }}</span>
          </template>
        </el-table-column>
        <el-table-column label="hash" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.hash }}</span>
          </template>
        </el-table-column>
        <el-table-column label="index" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.index }}</span>
          </template>
        </el-table-column>
        <el-table-column label="nonce" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.nonce }}</span>
          </template>
        </el-table-column>
        <el-table-column label="previous_hash" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.previous_hash }}</span>
          </template>
        </el-table-column>
        <el-table-column label="timestamp" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.timestamp }}</span>
          </template>
        </el-table-column>
                <el-table-column label="transactions" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.transactions }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Function" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Go transaction</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="$router.go(-1)">Back</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getchain } from "../config/api";
export default {
  name: "ChAin",
  data() {
    return {
      info: "No data found",
    };
  },
  created() {
    this.getchains();
  },
  methods: {
    //请求接口getchain
    getchains() {
      getchain()
        .then((res) => {
          console.log(res);
          this.info = res;
        })
        .catch(() => {
          this.$message("Request failed");
        });
    },
    //跳转transaction页面 传递当前点击的参数
    handleEdit(e, v) {
      this.$router.push({ name: "transaction", params: v });
      console.log(e, v);
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
    width: auto;
    text-align: left;
    padding: 10px;
    color: rgb(211, 210, 113);
    font-size: 14px;
    margin-bottom: 10px;
    overflow: auto;
    line-height: 22px;
    letter-spacing: 1px;
  }
}
</style>
