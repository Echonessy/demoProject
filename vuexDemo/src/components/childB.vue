<template>
  <div>
    <h2>我是ChildB组件</h2>
    <div>共享全局 state > Number：{{this.$store.getters.golbalNumber}}</div>
    <div class="single">模块B => {{$store.getters['childb/childNumber']}}</div>
    <div class="single">
      <button @click="addGolbalEvt">全局修改加+</button>
      <button @click="subGolbalEvt">全局修改减-</button>
    </div>
    <div class="single">
      <button @click="addChildbEvt">全局修改模块B加+</button>
      <button @click="subChildbEvt">全局修改模块B减-</button>
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
            addChildbEvt(){
                this.$store.dispatch('childb/addAction')
            },
            subChildbEvt(){
                this.$store.dispatch('childb/subAction')
            }
        },
    }
</script>

