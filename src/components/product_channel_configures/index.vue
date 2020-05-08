<template>
  <div class="CopClass">
    <h4>{{ msg }}</h4>
    <el-button type="primary" @click="login">新建产品配置组</el-button>
    <el-table :data="channel_data" border justify="center" style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column prop="name" label="配置组合名称"></el-table-column>
      <el-table-column prop="serviceMobile" label="客服电话"></el-table-column>
      <el-table-column prop="serviceTime" label="客服工作时间"></el-table-column>
      <el-table-column prop="companyName" label="公司名称"></el-table-column>
      <el-table-column prop="diamondTemplate" label="计费模版名称"></el-table-column>
      <el-table-column prop="nt_mem_nt_num" label="操作"></el-table-column>
    </el-table>
    <el-pagination
      background
      :page-size="20"
      :pager-count="3"
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'CopName',
  data () {
    return {
      msg: 'Welcom to More DashBoard!',
      checked: true,
      channel_data: []
    }
  },
  mounted () {
    this.login() // 初始化时载入
  },
  methods: {
    login: function () {
      let url = 'http://127.0.0.1:8080/admin/product_channel_configures/index'
      Vue.axios.get(url).then((response) => {
        this.channel_data = response.data.data
        console.log('respons22e22332:' + response.data.data[0])
      }).catch((error) => {
        console.log('error!' + error)
      })
    }
  }
}
</script>
