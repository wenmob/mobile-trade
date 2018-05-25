<style>
  @import '../../assets/css/common.css';
  .appHead{
      position: absolute;
      width: 100%;
      height: 1.2rem /* 44/16 */;
      background-color: #F70303;
      top: 0;
      left: 0;
      z-index: 3000;
      text-align: center;
      line-height: 1.2rem;
  }
  .appHead img:nth-child(3){
    position: absolute;
    width: 0.52rem;
    right: .3375rem; /* 15/16 */
    top: 0.32rem;
  }
  .appHead img:nth-child(1){
    position: absolute;
    width: 0.62rem;
    left: .3375rem; /* 15/16 */
    top: 0.26rem;
  }
  .appHead .title{
      color: #fff;
      font-size: 0.45rem;
  }
  .app-select{
    position: absolute;
    display: flex;
    top: 1.2rem;
    left: 0;
    width: calc(100% - 0.825rem);
    height: 1.051rem;
    background-color:#fff;
    border-bottom: 0.03rem solid #E8E8E8;
    padding-left: .4125rem /* 13/16 */;
    padding-right: .4125rem /* 13/16 */;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items:center;
    z-index: 3000;
  }
  .menu-a{
    display: inline;
    width: 1.0rem;
    height: 0.95rem;
    line-height: 1.05rem;
    font-size: 0.43rem;
    border-bottom: 0.06rem solid #fff;
    cursor: pointer;
    text-align:center;
  }
  .appFoot{
      position: absolute;
      width: 100%;
      height: 1.3rem;
      bottom: 0;
      left: 0;
      background-color: #fff;
      border-top: 0.03rem solid #E8E8E8;
      z-index: 3000;
  }
  .appMain{
      position: absolute;
      width: 100%;
      height: calc(100% - 3.7rem);
      top: 2.3rem;
      left: 0;
      z-index: 2000;
      overflow-y: auto;
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
  /*background:#fff;*/
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
  @keyframes rotating{
     from {
       transform:rotate(0deg);
       -ms-transform:rotate(0deg); 	/* IE 9 */
       -moz-transform:rotate(0deg); 	/* Firefox */
       -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
       -o-transform:rotate(0deg);
     }
     to {
       transform:rotate(360deg);
       -ms-transform:rotate(360deg); 	/* IE 9 */
       -moz-transform:rotate(360deg); 	/* Firefox */
       -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
       -o-transform:rotate(360deg);
     }
  }
  @-moz-keyframes rotating{
     from {
       transform:rotate(0deg);
       -ms-transform:rotate(0deg); 	/* IE 9 */
       -moz-transform:rotate(0deg); 	/* Firefox */
       -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
       -o-transform:rotate(0deg);
     }
     to {
       transform:rotate(360deg);
       -ms-transform:rotate(360deg); 	/* IE 9 */
       -moz-transform:rotate(360deg); 	/* Firefox */
       -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
       -o-transform:rotate(360deg);
     }
  }
   @-webkit-keyframes rotating{
     from {
       transform:rotate(0deg);
       -ms-transform:rotate(0deg); 	/* IE 9 */
       -moz-transform:rotate(0deg); 	/* Firefox */
       -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
       -o-transform:rotate(0deg);
     }
     to {
       transform:rotate(360deg);
       -ms-transform:rotate(360deg); 	/* IE 9 */
       -moz-transform:rotate(360deg); 	/* Firefox */
       -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
       -o-transform:rotate(360deg);
     }
  }
  @-o-keyframes rotating{
     from {
       transform:rotate(0deg);
       -ms-transform:rotate(0deg); 	/* IE 9 */
       -moz-transform:rotate(0deg); 	/* Firefox */
       -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
       -o-transform:rotate(0deg);
     }
     to {
       transform:rotate(360deg);
       -ms-transform:rotate(360deg); 	/* IE 9 */
       -moz-transform:rotate(360deg); 	/* Firefox */
       -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
       -o-transform:rotate(360deg);
     }
  }
</style>
<template>
   <div class="container">
      <div class="appHead" ref="appHead">
          <img src="../../assets/img/back.png" v-show="backShow" @click="goBack"/>
          <span class="title">交易</span>
          <transition name="rotation">
           <img src="../../assets/img/refresh.png" v-show="rotation" @click="rotaAction"/>
          </transition>
      </div>
      <div class="app-select" ref="appSelect">
         <a class="menu-a" v-for="menua in menuas" :style="tactive == menua.val ? bStyle : cStyle" @click="jumpPath(menua.val,menua.uri)">{{menua.title}}</a>
      </div>
      <div class="appMain" ref="appMain">
        <!--@before-enter="beforeEnter" @after-enter="afterEnter"-->
        <transition :name="transitionName">
          <!-- <router-view :key="key"></router-view> -->
          <router-view class="child-view"/>
        </transition>
      </div>
      <div class="fixedJump" ref="fixedJump" v-if='comDomain' @touchstart="backS($event)" @touchmove="backM($event)" @touchend="backE(comDomain)">
          <span>返回交易</span>
      		<em><img src="../../assets/img/smallBack.png"/></em>
      </div>
      <fot></fot>
      <!-- <div class="appFoot"></div> -->
   </div>
</template>
<script>
import { getDomain } from '@/utils/auth'
import fot from '@/components/plugin/Footer'
export default {
  data() {
      return {
        rotation:true,
        backShow: true,
        tactive: this.Tactive,
        transitionName: 'slide-left',
        bStyle: "color:#F70303;border-bottom: 0.06rem solid #F70303",
        cStyle: "color:#242424;border-bottom: 0.06rem solid #fff",
        menuas: [
          {val: "buy", title: "买入", uri:"/"},
          {val: "sale", title: "卖出", uri:"/sale"},
          {val: "repeal", title: "撤单", uri:"/repeal"},
          {val: "history", title: "查询", uri:"/history"},
          {val: "position", title: "持仓", uri:"/position"}
        ],
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
  mounted() {
    let _this = this;
    let p = _this.$route.path;
    if(p == "/"){
      _this.backShow = false;
    }
    if(_this.isWeiXin()){
      _this.$refs.appHead.style.display = "none";
      _this.$refs.appSelect.style.top = "0rem";
      _this.$refs.appMain.style.top = "1.2rem";
      _this.$refs.appMain.style.height = "calc(100% - 1.2rem)";
    } else {
//    console.log("不是来自微信内置浏览器");
    }

    this.comDomain = getDomain()

  },
  updated() {
    let _this = this;
    this.tactive = this.Tactive;
    let p = _this.$route.path;
    if(p == "/"){
      _this.backShow = false;
    }else{
     _this.backShow = true;
    }
    if(_this.isWeiXin()){
      _this.$refs.appHead.style.display = "none";
      _this.$refs.appSelect.style.top = "0rem";
      _this.$refs.appMain.style.top = "1.2rem";
      _this.$refs.appMain.style.height = "calc(100% - 2.4rem)";
    } else {
//    console.log("不是来自微信内置浏览器")
    }
  },
  methods:{
    jumpPath(n,uri) {
      let _this = this;
      _this.tactive = n;
      _this.$router.push({path:uri});
    },
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
    },
    //刷新的按钮
    rotaAction() {
      let _this = this;
      _this.rotation = false;
      setTimeout(() => {
        _this.rotation = true;
        window.location.reload();
      }, 1000);
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
