<style>
    @import '../../assets/css/common.css';
    .std_head{
        padding-left: 0.42rem;
        padding-right: 0.42rem;
        height: 1.0rem;
        background-color: white;
        border-bottom: 0.03rem solid #eeeeee;
    }
    .std_head .s1{
        float: left;
        font-size: 0.42rem;
        margin-top: 0.27rem;
        font-weight: 500;
    }
    .std_head .s2 {
        float: right;
        font-size: 0.40rem;
        margin-top: 0.27rem;
        font-weight: 500;
    }
    .std_d1{
      padding-left: 0.42rem;
      padding-right: 0.42rem; 
      background-color: white; 
    }
    .std_d1 .cont{
      width: 100%;  
      display: flex;  
      justify-content: space-between;
      border-bottom: 0.03rem solid #eeeeee;
      padding-top: 0.24rem;
      padding-bottom: 0.15rem;
    }
    .std_d1 .cont .t1{
        width: 32%;
        height: auto;
    }
    .std_d1 .cont .t1 .sa{
        display: block;
        font-size: 0.74rem;
        font-weight: 500;
    }
    .std_d1 .cont .t1 .sb{
        float: left;
        font-size: 0.32rem;
        margin-left: 0.1rem;
        margin-top: 0rem;
    }
    .std_d1 .cont .t1 .sc{
        float: left;
        font-size: 0.32rem;
        margin-left: 0.57rem;
        margin-top: 0rem;
    }
    .std_d1 .cont .t1 .sd{
       display: block;
       font-size: 0.30rem;
    }
    .std_xz {
        width: 100%;
        height: 1.0rem;
        background-color: white;
        margin-top: 0.12rem;
        border-bottom: 0.03rem solid #eeeeee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .std_xz .xz{
        display: inline-block;
        width: 25%;
        height: 100%;
        text-align: center;
        font-size: 0.42rem;
        font-weight: 500;
        line-height: 1.0rem;
    }
    .std_d2{
     width: 100%;
     height: 5.0rem;
     background-color: white;
    }
    .std_fot{
        position: relative;
        width: 100%;
        height: 1.2rem;
        background-color: white;
        display: flex;
        justify-content: space-between;

    }
    .std_fot a{
        display: inline-block;
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: 1.2rem;
        font-size: 0.45rem;
        color: white;
        background-color: #F70303;
    }
    .st-app{
        width: 100%;
        height: calc(100% - 5.04rem);
        background-color: black;
    }
</style>
<template>
   <div class="container">
     <!--头部的显示-->  
     <div class="std_head">
       <span class="s1">{{stockObj.stockName + "&emsp;" + stockObj.stockCode}}</span>
       <span class="s2" @click="delAdd(stockObj.stockCode,stockObj.stockName,stockObj.id,stockObj.isSelf)">{{stockObj.isSelf == true ? "删自选" : "加自选"}}</span>
     </div>
     <!--内容1-->
     <div class="std_d1">
       <div class="cont">
         <div class="t1" style="width: 31%">
             <span class="sa" :style="fontColor">{{stockObj.currentPrice}}</span>
             <span class="sb" :style="fontColor">{{stockObj.zfPrice}}</span>
             <span class="sc" :style="fontColor">{{stockObj.zfLimit}}</span>
             <div style="clear:both"></div>
         </div>
         <div class="t1" style="width: 34%">
             <span class="sd" :style="fontColor1">最高：{{stockObj.highest}}</span>
             <span class="sd" :style="fontColor2">最低：{{stockObj.lowest}}</span>
             <span class="sd" style="margin-top:0.12rem">成交额：{{stockObj.volPrice}}</span>
         </div>
         <div class="t1" style="width: 35%">
             <span class="sd">今开：{{stockObj.openPrice}}</span>
             <!-- <span class="sd">成交量：{{stockObj.volnumber}}</span>
             <span class="sd" style="margin-top:0.12rem">成交额：{{stockObj.volPrice}}</span> -->
             <span class="sd" style="margin-top:0.12rem">昨收：{{stockObj.closePrice}}</span>
             <span class="sd" style="margin-top:0.12rem">成交量：{{stockObj.volnumber}}</span>
         </div>
       </div>
     </div>
     <!--选择栏-->
     <div class="std_xz">
       <a class="xz" @click="seeStock(0)" :style="chartIndex == 0 ? 'color:#F70303' : 'color:#868989 '">分时</a>
       <a class="xz" @click="seeStock(1)" :style="chartIndex == 1 ? 'color:#F70303' : 'color:#868989 '">日K</a>
       <a class="xz" @click="seeStock(2)" :style="chartIndex == 2 ? 'color:#F70303' : 'color:#868989 '">周K</a>
       <a class="xz" @click="seeStock(3)" :style="chartIndex == 3 ? 'color:#F70303' : 'color:#868989 '">月K</a>
     </div>
     <!--组件区域-->
     <div class="st-app">
        <router-view />
     </div>
     
     <div class="std_fot">
       <a style="background-color:#1298FF" @click="goSaB(stockObj.stockCode,stockObj.stockName,'sale')">卖出</a>
       <a @click="goSaB(stockObj.stockCode,stockObj.stockName,'buy')">买入</a> 
     </div> 
   </div>
</template>
<script>
import APIS from '@/utils/apis';
import Time_share from '../plugIn/Time_share';
import Day_stock from '../plugIn/Day_stock';
import Week_stock from '../plugIn/Week_stock';
import Month_stock from '../plugIn/Month_stock';
import {getStockDetails} from '../../utils/utools';
let vm;
export default {
  data() {
      return {
        chartIndex: this.k,  
        stockObj:{
            id:"",
            stockName: "--",
            stockCode: "--",
            volnumber: "--",
            volPrice: "--",
            openPrice: "--",
            closePrice: "--",
            currentPrice: "--",
            zfPrice: "--",
            zfLimit: "--",
            highest: "--",
            lowest: "--",
            isSelf: false
        },
        fontColor: "color:#F70303",
        fontColor1: 'color:#F70303',
        fontColor2: 'margin-top:0.12rem;color:#0DB408',
        suval: undefined,
        shuaX: true
      }
  },
  components: {
    "timeShare": Time_share,
    "dayStock": Day_stock,
    "weekStock": Week_stock,
    "monthStock": Month_stock
  },
  beforeDestroy() {
    window.clearInterval(vm.suval);
    vm.suval = undefined;
    vm.shuaX = true;
  },
  mounted() {
      vm = this;
      vm.checkHaveStock();
  },
  methods: {
    //检查是否有股票传来
    checkHaveStock() {
        if(vm.$route.query.stockCode){
           vm.stockObj.stockCode = vm.$route.query.stockCode;
           vm.stockObj.isSelf = vm.$route.query.isSelf;
           vm.stockObj.id = vm.$route.query.id;
        //    vm.childrenData();
           vm.startInvalGet();
        }
    },
    //查看不同时间段的K线
    seeStock(n) {
      switch (n) {
          case 0:
               if(vm.chartIndex == 0) {
                   return;
               }
               vm.chartIndex = 0;
               vm.$router.push({path:'/oneself/stockDetail',query:{stockCode:vm.stockObj.stockCode}});
              break;
          case 1:
              if(vm.chartIndex == 1) {
                   return;
               }
               vm.chartIndex = 1;
               vm.$router.push({path:'/oneself/stockDetail/dayStock',query:{stockCode:vm.stockObj.stockCode}});
              break;
          case 2:
              if(vm.chartIndex == 2) {
                   return;
               }
               vm.chartIndex = 2;
               vm.$router.push({path:'/oneself/stockDetail/weekStock',query:{stockCode:vm.stockObj.stockCode}});
              break; 
          case 3:
              if(vm.chartIndex == 3) {
                   return;
               }
               vm.chartIndex = 3;
               vm.$router.push({path:'/oneself/stockDetail/monthStock',query:{stockCode:vm.stockObj.stockCode}});
              break;        
          default:
              break;
      }
    },
    //获取股票的信息
    getSD(stockCode) {
       getStockDetails(stockCode,function(data) {
               let hq_str = eval("hq_str_"+stockCode.toLowerCase());
               let stockD = hq_str.split(",");
               //1今天开盘价位 2昨天收盘价 3是当前价 4是最高价 5是最低价位 8是成交量 9是成交额
               vm.stockObj.stockName = stockD[0];
               vm.stockObj.openPrice = (stockD[1]*1).toFixed(2);
               vm.stockObj.closePrice = (stockD[2]*1).toFixed(2);
               vm.stockObj.currentPrice = (stockD[3]*1).toFixed(2);
               vm.stockObj.highest = (stockD[4]*1).toFixed(2);
               vm.stockObj.lowest = (stockD[5]*1).toFixed(2);
               vm.stockObj.volnumber = (stockD[8]/10000).toFixed(2) + "万手";
               vm.stockObj.volPrice = (stockD[9]/100000000).toFixed(2) + "亿元";
               vm.stockObj.zfPrice = ((stockD[3]*1) - (stockD[2]*1)).toFixed(2);
               if(vm.stockObj.zfPrice > 0){
                   vm.fontColor = "color:#F70303";
                    vm.stockObj.zfLimit = "+" + ((vm.stockObj.zfPrice / vm.stockObj.closePrice)*100).toFixed(2) + "%";
               }else if(vm.stockObj.zfPrice < 0){
                   vm.fontColor = "color:#0DB408";
                   vm.stockObj.zfLimit = ((vm.stockObj.zfPrice / vm.stockObj.closePrice)*100).toFixed(2) + "%";
               }else{
                   vm.fontColor = "color:#1c1c1c";
                   vm.stockObj.zfLimit = ((vm.stockObj.zfPrice / vm.stockObj.closePrice)*100).toFixed(2) + "%";
               }

               if(vm.stockObj.highest > vm.stockObj.closePrice){
                   vm.fontColor1 = "color:#F70303";   
               }else if(vm.stockObj.highest < vm.stockObj.closePrice){
                   vm.fontColor1 = "color:#0DB408";
               }else{
                   vm.fontColor = "color:#1c1c1c";
               }

               if(vm.stockObj.lowest > vm.stockObj.closePrice){
                   vm.fontColor2 = "margin-top:0.12rem;color:#F70303";
               }else if(vm.stockObj.lowest < vm.stockObj.closePrice){
                   vm.fontColor2 = "margin-top:0.12rem;color:#0DB408";
               }else{
                   vm.fontColor2 = "margin-top:0.12rem;color:#1c1c1c";
               }

              vm.shuaX = true; 
           })
    },
    //实时刷新界面的数据
    startInvalGet(){
        vm.suval = self.setInterval(function () {
             if(vm.shuaX){
                 vm.shuaX = false;
                 let st = vm.stockObj.stockCode.toLowerCase();
                 vm.getSD(st);
             }
        },1000)
    },
    //去买入、卖出
    goSaB(stockCode,stockName,str) {
        if(str == 'buy'){
             vm.$router.push({path:'/',query:{stockCode:stockCode.toLowerCase(),stockName:stockName}});
        }else{
             vm.$router.push({path:'/sale',query:{stockCode:stockCode.toLowerCase(),stockName:stockName}});
        }
     
     
    },
    //添加和删除自选的功能
    delAdd(stockCode,stockName,id,isSelf){
        if(isSelf){
          APIS.delSelfStocks(id).then(res => {
              if(res.code == 0) {
                  vm.stockObj.isSelf = false;
              }
          })
        }else{
          APIS.addSelfStock(stockCode,stockName).then(res => {
              if(res.code == 0) {
                  vm.stockObj.isSelf = true;
              }
          })
        }
    }
   
  }
}
</script>


