<style>
	@import '../../assets/css/common.css';
  .os-head{
    position: relative;
    width: 100%;
    height: 1.2rem /* 44/16 */;
    background-color: #F70303;
    top: 0;
    left: 0;
    z-index: 3000;
    text-align: center;
    line-height: 1.2rem;
  }
  .os-head img{
    position: absolute;
    width: 0.62rem;
    left: .3375rem; /* 15/16 */
    top: 0.26rem;
  }
  .os-head .title{
    color: #fff;
    font-size: 0.45rem;
  }
  .userAppMain{
    position: relative;
    overflow: auto;
  }
  /*fade*/
  .child-view {
    position: absolute;
    width:100%;
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
  .rotation-enter-active {
    animation: rotating 0s reverse;
    -moz-animation: rotating 0s reverse;	/* Firefox */
    -webkit-animation: rotating 0s reverse;	/* Safari 和 Chrome */
    -o-animation: rotating 0s reverse;
  }
  .rotation-leave-active {
    animation: rotating 1s;
    -moz-animation: rotating 1s;	/* Firefox */
    -webkit-animation: rotating 1s;	/* Safari 和 Chrome */
    -o-animation: rotating 1s;
  }
</style>
<template>
	<div class="container">
     <div class="os-head" ref='userhead'>
     	<img src="../../assets/img/back.png" v-show="backShow" @click="goBack"/>
       	<span class="title">{{title}}</span>
     </div>
    <div class="userAppMain" ref="userAppMain">
			
      <transition :name="transitionName">
        <!-- <router-view :key="key"></router-view> -->
        <router-view class="child-view"/>
      </transition>
    </div>
  </div>
</template>

<script>
	export default {
	    data() {
	     return {
	       transitionName: 'slide-left',
	       backShow:true,
	       title:''
	     }
	   },
	   mounted(){
	   	
	   		if(this.$route.path == '/user' || this.$route.path == '/user/userDetail'){
		   		this.backShow = false
		   		this.title = '我的'
		   	}else{
		   		this.backShow = true
		   	}
		   	
		   	if(this.$route.path == '/user/changePaw'){
		   		this.title = '修改密码'
		   	}else if(this.$route.path == '/user/about'){
		   		this.title = '关于'
		   	}
		   	
		   	if(this.isWeiXin()){
		      this.$refs.userhead.style.display = "none";
		    } else {
		//    console.log("不是来自微信内置浏览器");
		    }
	   },
	   methods:{
	   		goBack() {
		      this.$router.go(-1);
		    },
		    //判断是否为微信浏览器
		      isWeiXin() {
		        let ua = window.navigator.userAgent.toLowerCase();
		        if(ua.match(/MicroMessenger/i) == 'micromessenger') {
		          return true;
		        } else {
		          return false;
		        }
		      }
	   },
	   beforeRouteUpdate (to, from, next) {
	   		if(to.fullPath == '/user' || to.fullPath == '/user/userDetail'){
		   		this.backShow = false
		   		this.title = '我的'
		   	}else{
		   		this.backShow = true
		   	}
				 
		   	if(to.fullPath == '/user/changePaw'){
		   		this.title = '修改密码'
		   	}else if(to.fullPath == '/user/about'){
		   		this.title = '关于'
		   	}
		   	
		     let isBack = this.$router.isBack;
		     if (isBack) {
			       this.transitionName = 'slide-right'
			 } else {
			   this.transitionName = 'slide-left'
		     }
		     this.$router.isBack = false;
		     next();
	   },
	 }
</script>
