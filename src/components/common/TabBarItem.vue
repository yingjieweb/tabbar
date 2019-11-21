<template>
  <div id="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'#1296DB'
      }
    },
    data(){
      return{
        //isActive:false
      }
    },
    computed:{
      isActive(){//本来这里有个getter和setter，setter一般不写，所以这里是个函数
        //$route指代当前活跃的路由对象
        // /home活跃 -> item1（/home）  = true
        // /home活跃 -> item1（/category）  = false
        // /home活跃 -> item1（/cart）  = false
        // /home活跃 -> item1（/profile）  = false
        //return this.$route.path.indexOf(this.path)  !== -1;
        return this.$route.path === this.path;
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        console.log("组件被点击了");
        if(this.$route.path !== this.path){
          this.$router.replace(this.path);//跳转页面
        }
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
</style>
