<template>
    <div class="p-foot-component">
        <van-tabbar :active="active" @change="navChange">
            <van-tabbar-item name="pagesIndex" icon="home-o">index</van-tabbar-item>
            <van-tabbar-item name="pagesTest" icon="search">test</van-tabbar-item>
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
        active: 'test'
      }
    },
    methods: {
      navChange(event) {
        // event.detail 的值为当前选中项的索引
        //console.log(22, event.mp.detail);
        this.active = event.mp.detail
        //console.log(24, this.active)
        let url = ''
        //console.log(25, this.$router.currentRoute.name)
        switch (this.active) {
          case 'pagesIndex':
            url = "/pages/index";
            break;
          case 'pagesTest':
            url = "/pages/test";
            break;
          case 2:
            url = "3";
            break;
          case 3:
            url = "4";
            break;
          default:
            url = "";
        }
        //console.log(42, url)
        this.$router.replace({ path: url})
      }
    },
    components: {},
    onLoad() {
      //设置active的值为当前路由的name
      let tempArr = this.$root.$mp.page.route.split('/')
      this.active = tempArr[0] + tempArr[1].replace(/^\S/, s => s.toUpperCase())
    },
    onShow() {

      //console.log('onShow')
    }
  }
</script>
<style lang="scss" scoped>
    .p-foot-component{
        //border: solid 1px red;
    }
</style>
