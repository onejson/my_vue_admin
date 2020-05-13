<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <button @click="send">发消息</button>
    </div>
  </div>
</template>
<script>

export default {
  name: 'test',
  data () {
    return {
      websock: null
    }
  },
  created () {
    this.initWebSocket()
  },
  destroyed () {
    this.websock.close() // 离开路由之后断开websocket连接
  },
  methods: {
    initWebSocket () { // 初始化weosocket
      // const wsuri = 'ws://127.0.0.1:8080'
      const wsuri = 'ws://www.duoduo_php.com/ws?cname=operator_3&token=uupucl4gcqa7j6gd'
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    websocketonopen () { // 连接建立之后执行send方法发送数据
      let actions = {'test': '12345'}
      this.send(JSON.stringify(actions))
    },
    websocketonerror () { // 连接建立失败重连
      this.initWebSocket()
    },
    websocketonmessage (e) { // 数据接收
      const redata = JSON.parse(e.data)
      console.log(redata)
    },
    send (Data) { // 数据发送
      this.websock.send(Data)
    },
    websocketclose (e) { // 关闭
      console.log('断开连接', e)
    }
  }
}
</script>
