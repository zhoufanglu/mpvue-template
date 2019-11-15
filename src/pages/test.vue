<template>
    <div class="p-test">
        <headComponent
                title="测试页面"
                isReturn="false"
        ></headComponent>
        <div>
            test
            <div>
                <h2>vueX</h2>
                <div>count:{{count}}</div>
                <button @click="increment">inc</button>
                <button @click="decrement">dec</button>
            </div>
        </div>
        <footComponent></footComponent>
    </div>
</template>
<script>
    import {mapState,mapMutations } from 'vuex';
    import axios from 'axios'
    export default {
        name: '',
        data() {
        return {}
      },
      computed: {
        ...mapState(["count"])
      },
      methods: {
        ...mapMutations([
          'increment',
          "decrement"
        ])
      },
      components: {},
      onShow() {
        //https://api.agify.io/?name='nice'
        //console.log(37, this.$doMain)
        //请求测试
        this.$get(
          `https://suggest.taobao.com/sug?code=utf-8&q=手机`,
        ).then((res) => {
          console.log(44,res)
        })
      }
    }
</script>
<style lang="scss" scoped>
    .p-test {
    }
</style>
