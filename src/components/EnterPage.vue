<template>
  <div class="CopClass">
    <h4>{{ msg }}</h4>
    <el-button type="primary" @click="login">Show Channels</el-button>
    <el-table :data="channel_data" border justify="center" style="width: 100%">
      <el-table-column prop="title_chinese" label="ChannelName"></el-table-column>
      <el-table-column prop="shor_description_chinese" label="Description"></el-table-column>
      <el-table-column prop="visible" label="Visible"></el-table-column>
    </el-table>
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
  methods: {
    login: function () {
      var url = '/api/channelinfos/'
      Vue.axios.get(url).then((response) => {
        this.channel_data = response.data.results
        console.log('response:' + response)
      }).catch((error) => {
        console.log('error!' + error)
      })
    }
  }
}
</script>
