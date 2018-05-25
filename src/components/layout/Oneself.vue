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
  .os-head .title{
    color: #fff;
    font-size: 0.45rem;
  }
  .os-head img{
    position: absolute;
    width: 0.62rem;
    left: .3375rem; /* 15/16 */
    top: 0.26rem;
  }
  .oneselfAppMain{
    position: relative;
    width: 100%;
    height: calc(100% - 2.45rem);
    overflow: auto;
    background-color: #eee;
  }
  /*悬浮跳转按钮*/
	 .fixedJump{
	 		position:absolute;
	 		z-index:3200;
	 		top:10.5rem;
      left: 0rem;
	 		width:2.2rem;
	 		background:#ffa800;
	 		padding:0.1rem;
	 		border-radius:0 0.4rem 0.4rem 0;
	 		font-size:14px;

	 }
	 .fixedJump span{
	 		color:#fff;
      float: left;
      font-size: 0.4rem;
      margin-top: 0.03rem;
	 }
	 .fixedJump em{
	 		width:0.52rem;
	 		height:0.52rem;
	 		background:#fff;
	 		border-radius:0.3rem;
      float: right;
      margin-top: 0rem;
	 }
	 .fixedJump em img{
	 		height:0.32rem;
	 		margin-top:0.09rem;
	 		margin-left:0.17rem;
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
</style>
<template>
  <div class="container">
     <div class="os-head" v-if="ishead">
       <img src="../../assets/img/back.png" v-show="backShow" @click="goBack"/>
       <span class="title">{{osTitle}}</span>
        <input type="hidden" id="wg" value="aaaa"/>
     </div>
    <div class="oneselfAppMain" ref="oneselfAppMain">
      <transition :name="transitionName">
        <!-- <router-view :key="key"></router-view> -->
        <router-view class="child-view"/>
      </transition>
    </div>
    <div class="fixedJump" ref="fixedJump" v-if='comDomain' @touchstart="backS($event)" @touchmove="backM($event)" @touchend="backE(comDomain)">
          <span>返回交易</span>
      		<em><img src="../../assets/img/smallBack.png"/></em>
      </div>
    <fot v-show="fotShow"></fot>
  </div>
</template>
<script>
 import { getDomain } from '@/utils/auth'
 import fot from '@/components/plugin/Footer'
 export default {
   data() {
     return {
       transitionName: 'slide-left',
       backShow: true,
       fotShow: true,
       osTitle: this.OS_Title,
       ishead: true,
       comDomain:undefined,
       handObj: {
          _x_start: undefined,
          _y_start: undefined,
          _x_move: undefined,
          _y_move: undefined,
          _x_end: undefined,
          _y_end: undefined,
          top_start: undefined,
          t1:undefined,
          t2:undefined
        }
     }
   },
   components:{
     'fot':fot
   },
   beforeRouteUpdate (to, from, next) {
     let isBack = this.$router.isBack;
     if (isBack) {
       this.transitionName = 'slide-right'
     } else {
       this.transitionName = 'slide-left'
     }
     this.$router.isBack = false;
     next();
   },
   beforeUpdate() {
     this.needBack();
     this.osTitle = this.OS_Title;
   },
   mounted() {
     this.needBack();
     this.comDomain = getDomain();
   },
   methods: {
    //判断是否为微信浏览器
    isWeiXin() {
      let ua = window.navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    //微信浏览器头部不显示
    headShow(){
      let _this = this;
      if(_this.isWeiXin()){
         _this.ishead = false;
         _this.$refs.oneselfAppMain.style.height = "calc(100% - 1.2rem)";

      }
    },
     //组件箭头和底部的显示与隐藏
     needBack(){
       let _this = this;
       let Path = this.$route.path;
       if(Path == "/oneself"){
         //底部显示的时候
         this.backShow = false;
         this.fotShow = true;
         if(_this.isWeiXin()){
         _this.ishead = false;
         _this.$refs.oneselfAppMain.style.height = "calc(100% - 1.25rem)";
         }else{
            _this.$refs.oneselfAppMain.style.height = "calc(100% - 2.45rem)";
         }
        
       }else{
         //底部不显示的时候
         this.backShow = true;
         this.fotShow = false;
         if(_this.isWeiXin()){
           _this.ishead = false;
           _this.$refs.oneselfAppMain.style.height = "100%";
         }else{
            _this.$refs.oneselfAppMain.style.height = "calc(100% - 1.2rem)";
         }
         
       }
     },
     //返回的功能
     goBack() {
       let fromPath = this.$route.path;
       if(fromPath.indexOf("/oneself/stockDetail") != -1){
           this.$router.isBack = true;
           this.$router.push('/oneself');
           return;
       }
       this.$router.go(-1);
     },
     backE(comDomain){
      let _this = this;
      _this.handObj.t2 = new Date().getTime();
      if((_this.handObj.t2 - _this.handObj.t1) < 100){
        window.location.href = comDomain
      }

    },
    backS(e) {
      let _this = this;
      e.preventDefault();
      _this.handObj.t1 = new Date().getTime();
      _this.handObj._y_start = e.touches[0].pageY;
      _this.handObj.top_start = _this.$refs.fixedJump.offsetTop;
    },
    backM(e) {
      let _this = this;
      _this.handObj._y_move = e.touches[0].pageY;
      _this.$refs.fixedJump.style.top = parseFloat(_this.handObj._y_move) - parseFloat(_this.handObj._y_start) + parseFloat(_this.handObj.top_start) + "px";
    }
       
     
   }
 }
</script>
