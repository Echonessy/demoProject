<template>
  <div>
    <h2>我是ChildA组件</h2>
    <div>共享全局 state > Number：{{this.$store.getters.golbalNumber}}</div>
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
    data(){
        return{}
    },
    mounted(){
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
    },
}
</script>

