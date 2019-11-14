<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <headComponent></headComponent>
    <!--<div class="userinfo" @click="bindViewTap">
      <div>&#45;&#45;&#45;&#45;</div>
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>-->

    <van-tag>标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter" class="counter">去往Vuex示例页面</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  mpType: 'page',

  data () {
    return {
      motto: 'Hello World22',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '/packageA/logs'
      this.$router.push(url)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (code) => {
          console.log(56, code)
          wx.getUserInfo({
            success: (res) => {
              console.log(58,res)
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      //console.log('clickHandle:', msg, ev)
    },
  },
  onShow() {

  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="scss" scoped>
  .usermotto{
    >div{
      color: $theme;
    }
    border: solid 1px red;
  }
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}


.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
