<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    data(){
      return{
        isActive:false
      }
    },
    methods:{
      itemClick(){
        console.log("组件被点击了");
        this.$router.replace(this.path);//跳转页面
      }
    }
  }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;  /*弹性布局的均匀分布*/
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

 #tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active{
    color: red;
  }
</style>
