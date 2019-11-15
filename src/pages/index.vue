<template>
    <div>
        <headComponent
                title="首页"
                isReturn="false"
        ></headComponent>
        <h3>index</h3>

        <footComponent></footComponent>
    </div>
</template>

<script>

  export default {
    mpType: 'page',

    data() {
      return {
        motto: 'Hello World22',
        userInfo: {}
      }
    },

    components: {

    },

    methods: {
      bindViewTap() {
        const url = '/packageA/logs'
        this.$router.push(url)
      },
      getUserInfo() {
        // 调用登录接口
        wx.login({
          success: (code) => {
            console.log(56, code)
            wx.getUserInfo({
              success: (res) => {
                console.log(58, res)
                this.userInfo = res.userInfo
              }
            })
          }
        })
      },
      clickHandle(msg, ev) {
        //console.log('clickHandle:', msg, ev)
      },
    },
    onShow() {

    },

    created() {
      // 调用应用实例的方法获取全局数据
      //this.getUserInfo()
    }
  }
</script>

<style lang="scss" scoped>

</style>
