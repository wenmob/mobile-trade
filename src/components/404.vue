<style>
  .com-container {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 auto;
    /*background-color: #fff;*/
    padding-bottom: 1.2rem;
    border-top:0.001rem solid #f5f5f5;
  }
  #errorPage{
    position: relative;
    width: 100%;
    height: 100%;
    border-top:0.03rem solid #F5F5F5;
  }
  .errPageImg{
     position: relative;
     display: block;
     width: 5rem;
     height: 5.4rem;
     margin: 0 auto;
     margin-top: 2.4rem;

  }
  .errMsg{
    position: relative;
    display: block;
    text-align: center;
    font-size: 0.44rem;
    margin-top: 0.46rem;
  }
  .errFooter{
    text-align: center;
    margin-top: 1.2rem;
  }
  .errFooter a{
    display: inline-block;
    width: 2.0rem;
    padding: 0.16rem 0.46rem;
    border:0.03rem solid #1E263A;
    color: #1E263A;
    font-size: 0.38rem;
    border-radius: 1rem;
    margin-left: 0.36rem;
  }
</style>
<template>
  <div class="container">
    <div class="com-container">
     <div id="errorPage">
       <img src="../assets/img/404.png" class="errPageImg">
       <span class="errMsg">您访问的页面还没有成熟</span>
       <div class="errFooter">
         <a @click="goHome">返回首页</a>
         <a @click="goBack">返回上一页</a>
       </div>
     </div>
    </div>
  </div>
</template>
<script>
  let vm;
  export default {
    data(){
      return{

      }
    },
    components:{


    },
    mounted(){
      vm = this;
    },
    methods:{
      goBack(){
        vm.$router.go(-1);
      },
      goHome(){
        vm.$router.push({path:'/'});
      }
    }
  }
</script>

