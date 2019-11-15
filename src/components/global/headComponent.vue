<template>
    <div class="p-head-component">
        <van-nav-bar :title="title">
            <div slot="left" v-if="isReturn==='true'">
                返回
            </div>
        </van-nav-bar>
    </div>
</template>
<script>
  export default {
    name: 'headComponent',
    props: ['title','isReturn'],
    data() {
      return {

      }
    },
    methods: {},
    components: {},
    onLoad() {
    }
  }
</script>
<style lang="scss" scoped>
    .p-head-component{

    }
</style>
