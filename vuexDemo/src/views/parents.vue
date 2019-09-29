<template>
  <div>
    <div class="child">
      <child-a/>
      <child-b/>
    </div>
    <h2>我是父组件</h2>
    <div class="single">全局state {{$store.state}}</div>
    <div class="single">全局getters {{$store.getters}}</div>
    <div class="single">模块A => {{$store.getters['childa/childNumber']}}</div>
    <div class="single">
      <button @click="addGolbalEvt">全局修改加+</button>
      <button @click="subGolbalEvt">全局修改减-</button>
    </div>
    <div class="single">
      <button @click="addChildaEvt">全局修改模块A加+</button>
      <button @click="subChildaEvt">全局修改模块A减-</button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    childA: () => import('@/components/childA'),
    childB: () => import('@/components/childB'),
  },
  data(){
      return{}
  },
  methods:{
      addGolbalEvt(){
          this.$store.dispatch('addGolbalAction')
      },
      subGolbalEvt(){
        this.$store.dispatch('subGolbalAction')
      },
      addChildaEvt(){
          this.$store.dispatch('childa/addAction')
      },
      subChildaEvt(){
          this.$store.dispatch('childa/subAction')
      }

  }
}
</script>
<style>
  .child{border: 1px solid #ccc;box-sizing: border-box;padding: 30px;}
  .single{line-height: 40px;}
</style>

