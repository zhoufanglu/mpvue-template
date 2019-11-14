<template>
    <div class="p-foot-component">
        <van-tabbar :active="active" @change="navChange">
            <van-tabbar-item  icon="home-o">index</van-tabbar-item>
            <van-tabbar-item  icon="search">test</van-tabbar-item>
            <van-tabbar-item  icon="friends-o">3</van-tabbar-item>
            <van-tabbar-item  icon="setting-o">4</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        active: 1
      }
    },
    methods: {
      navChange(event) {
        // event.detail 的值为当前选中项的索引
        //console.log(22, event.mp.detail);
        this.active = event.mp.detail
        if(this.active === 0){
          console.log(this.$router)
          this.$router.push({ path: '/pages/index'})
        }
      }
    },
    components: {},
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>
    .p-foot-component{
        //border: solid 1px red;
    }
</style>
