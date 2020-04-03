<template>
  <div class="CopClass">
    <h4>{{ msg }}</h4>
    <el-button type="primary" @click="login">Show Channels</el-button>
    <el-table :data="channel_data" border justify="center" style="width: 100%">
      <el-table-column prop="id" label="Id"></el-table-column>
      <el-table-column prop="nt_com_nt_num" label="商户编号"></el-table-column>
      <el-table-column prop="nt_mem_nt_num" label="商户编码"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)

export default {
  name: 'CopName',
  data () {
    return {
      msg: 'Welcom to More DashBoard!',
      checked: true,
      channel_data: []
    }
  },
  methods: {
    login: function () {
      var url = '/api/user/index2/'
      console.log(url)
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
