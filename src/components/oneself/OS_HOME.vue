<style>
  @import '../../assets/css/common.css';
  .os_home_head{
    position: relative;
    width: 100%;
    height: 1.23rem;
    background-color: white;
  }
  .os_home_head_m1{
    width: 0.46rem;
    float: left;
    margin-left: 0.42rem;
    margin-top: 0.38rem;
  }
  .os_home_head_d1{
    position: relative;
    width: calc(100% - 1.64rem);
    height: 0.9rem;
    background-color: #EEEEEE;
    float: left;
    margin-left: 0.44rem;
    margin-top: 0.16rem;
    border-radius: 0.76rem;
  }
  .os_home_head_d1 input{
     position: absolute;
     width: 70%;
     height: 0.68rem;
     background-color: transparent;
     left: 10px;
  }
  .os_home_head_d1_m1{
    position: absolute;
    width: 0.54rem;
    right: 0.34rem;
    top: 0.14rem;
  }
  .os_home_head_d1_m2{
    position: absolute;
    width: 0.48rem;
    top: 0.2rem;
    right: 0.4rem;
  }
  .os_home_null{
    width: 100%;
    margin-top: 3.0rem;
  }
  .os_home_null img{
    display: inline-block;
    width: 1.8rem;
  }
  .os_home_null span{
    display: block;
    color: #9C9C9C;
    font-size: 0.34rem;
    margin-top: 0.24rem;
  }
  .os_home_haveData{
    border-top:0.03rem solid #eee;
    background-color: white;
    margin-top: 0.24rem;
  }
  .os_home_t1{
    width: 100%;
    border-collapse: collapse;
  }
  .os_home_t1 th,.os_home_t1 td{
    height: 1.0rem;
    font-size: 0.4rem;
    text-align: left;
    width: 33.33%;
  }
  .os_home_t1 th{
     font-weight: 400;
     border-bottom:0.03rem solid #EEEEEE;
  }
  .os_home_t1 td{
    font-weight: 500;
    padding: 0;
    margin: 0;
  }
  .os_home_t1 td .d1{
    border-bottom:0.03rem solid #EEEEEE;
    height: 100%;
    line-height: 1.0rem;
  }
  .os_home_t1 td .d2{
    border-bottom-style: none;
    height: 100%;
    line-height: 1.0rem;
  }
  .os_home_head_d1 input::-ms-input-placeholder{text-align: left;}
  .os_home_head_d1 input::-webkit-input-placeholder{text-align: left;}
  .os_home_dialog{
    position: absolute;
    width: 100%;
    height: 0px;
    background-color:rgba(255, 255, 255, 0.9);
    top: 1.15rem;
    left: 0;
    overflow: auto;
    transition: all 0.3s;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
  }
  .OS_SEARCH_CONT_t1{
       width: 100%;
       border-collapse: collapse;
   }
   .OS_SEARCH_CONT_t1 td{
       width: 33.3%;
       height: 1.0rem;
       font-size: 0.4rem;
       font-weight: 500;
   }
   .OS_SEARCH_CONT_t1 .b1{
      padding-left:0.35rem;
      border-bottom: 0.03rem solid #ccc;
   }
   .OS_SEARCH_CONT_t1-m1{
       width: 0.48rem;
       margin-top: 0.06rem;
   }
</style>
<template>
  <div class="container">
    <div class="os_home_head">
       <img class="os_home_head_m1" src="../../assets/img/z-01.png" @click="jumpEditor"/>
       <div class="os_home_head_d1">
         <input type="text" v-model="stockStr" placeholder="请输入股票代码或简拼" @input="openDialog"/>
         <!-- <img class="os_home_head_d1_m1" src="../../assets//img/z-02.png"/> -->
         <img class="os_home_head_d1_m2" src="../../assets/img/clear.png" @click="clearNth" v-show="showClear">
       </div>
    </div>
    <!--弹出框-->
    <div class="os_home_dialog">
       <table class="OS_SEARCH_CONT_t1">
           <tr v-for="(st,index) in stocks">
               <td class="b1"  @click="goStockDetail(st.stockName,st.stockCode,st.canAdd,st.id)">{{st.stockName}}</td>
               <td class="b1" style="text-align:center"  @click="goStockDetail(st.stockName,st.stockCode,st.canAdd,st.id)">{{st.stockCode}}</td>
               <td class="b1" style="text-align:right;padding-right:0.58rem;"><img v-show="st.canAdd" class="OS_SEARCH_CONT_t1-m1" src="../../assets/img/z.png" @click="addSelf_Stock(st.stockCode,st.stockName,index)"/></td>
           </tr>
        </table>
    </div>
    <!-- 没有股票时，显示 -->
    <div class="os_home_null" align="center" v-if="haveStocke == 0">
      <img src="../../assets/img/z-03.png" @click="jumpSearch"/>
      <span>暂无股票 点击添加</span>
    </div>
    <!--有股票时，显示-->
    <div class="os_home_haveData" v-else="haveStocke">
      <table class="os_home_t1">
         <tr>
           <th style="padding-left: 0.42rem;">股票名称</th>
           <th style="text-align:center">当前价</th>
           <th style="text-align:right;padding-right: 0.43rem;">涨跌幅</th>
         </tr>
         <tr v-for="(sd,index) in stockeData" @click="goStockDetail(sd.stockName,sd.stockCode,sd.id)">
           <td style="padding-left: 0.42rem;">
             <div class="d1">{{sd.stockName}}</div>
           </td>
           <td style="text-align:center;">
             <div class="d1" style="color:#1C1C1C" v-if="sd.linePrice == 0">{{sd.currentPrice}}</div>
             <div class="d1" style="color:#4DB831" v-else-if="sd.linePrice == -1">{{sd.currentPrice}}</div>
             <div class="d1" style="color:#1C1C1C" v-else-if="sd.linePrice == 2">{{sd.currentPrice}}</div>
             <div class="d1" style="color:red" v-else="sd.linePrice == 1">{{sd.currentPrice}}</div>
           </td>
           <td style="text-align:right;">
             <div class="d1" style="padding-right: 0.43rem;color:#1C1C1C" v-if="sd.linePrice == 0">{{sd.zd}}</div>
             <div class="d1" style="padding-right: 0.43rem;color:red" v-else-if="sd.linePrice == 1">{{sd.zd}}</div>
             <div class="d1" style="padding-right: 0.43rem;color:#1C1C1C" v-else-if="sd.linePrice == 2">{{sd.zd}}</div>
             <div class="d1" style="padding-right: 0.43rem;color:#4DB831" v-else="sd.linePrice == -1">{{sd.zd}}</div>
           </td>
         </tr>
      </table>
    </div>
  </div>
</template>
<script>
import APIS from '../../utils/apis';
import { getStock,getBuyAndSale } from '@/utils/utools'
let vm;
 export default {
   data() {
     return{
       haveStocke:1,
       stockeData: [],
       ytr: undefined,
       canY: true,
       stockStr:"",
       stocks:[],
       showClear:false
     }
   },
   beforeDestroy(){
     vm.canY=true;
     window.clearInterval(vm.ytr);
     vm.ytr = undefined;
     vm = undefined;
   },
   mounted() {
     vm = this;
     vm.getStocks();
     vm.startGetAuto();
   },
   methods: {
     jumpSearch() {
       vm.$router.push({path:'/oneself/search'});
     },
     //前往编辑的页面
     jumpEditor() {
       vm.$router.push({path:'/oneself/editor'});
     },
     //循环解决股票的行情
     startGetAuto() {
        vm.ytr = self.setInterval(function (){
          if(vm.canY){
            vm.canY = false;
            if(vm.stockeData.length == 0) {
              vm.canY = true;
              return;
            }
            vm.stockeData.forEach(element => {
              let sc = element.stockCode.toLowerCase();
              getBuyAndSale(sc,function (data) {
                 let hq_str = eval("hq_str_"+sc);
                 let arrs = hq_str.split(",");
                 element.currentPrice = (arrs[3]*1).toFixed(2);
                 if(element.currentPrice*1 == 0) {
                   element.linePrice = 2;
                   element.zd = "--";
                   vm.canY = true;
                   return;
                 }
                 if((arrs[3]*1) > (arrs[2]*1)){
                    element.linePrice = 1;
                    element.zd = "+" + (((arrs[3]*1-arrs[2]*1)/arrs[2])*100).toFixed(2) + "%"; 
                 }else if((arrs[3]*1) < (arrs[2]*1)){
                    element.linePrice = -1;
                    element.zd = (((arrs[3]*1-arrs[2]*1)/arrs[2])*100).toFixed(2) + "%"; 
                 }else{
                    element.linePrice = 0;
                    element.zd =(((arrs[3]*1-arrs[2]*1)/arrs[2])*100).toFixed(2) + "%"; 
                 }
                vm.canY = true; 
              })
            })
          }
        },1000);
     },
     //获取自己自选的股票
     getStocks() {
        APIS.getSelfStockList().then(res => {  
            if(res.code == 0) {
                if(res.data.length > 0){
                  res.data.forEach(element => {
                    element.currentPrice = "-";
                    element.linePrice = 0;
                    element.zd = "-";
                  });
                  vm.stockeData = res.data;
                } 
            }else if(res.code == 700) {
              let arrobj = [
                    {
                      stockName: "上证指数",
                      stockCode: "SH000001",
                      currentPrice: "-",
                      linePrice: 0,
                      zd: "-"
                    },
                    {
                      stockName: "沪深300",
                      stockCode: "SH000300",
                      currentPrice: "-",
                      linePrice: 0,
                      zd: "-"
                    },
                    {
                      stockName: "深圳成指",
                      stockCode: "SZ399001",
                      currentPrice: "-",
                      linePrice: 0,
                      zd: "-"
                    }
                  ];
                  vm.stockeData =  arrobj;
            }
        })
     },
    //前往k线图 
    goStockDetail(stockName,stockCode,id) {
      let isSelf = true;
      vm.$router.push({path:'/oneself/stockDetail',query:{stockCode:stockCode,isSelf:isSelf,id:id}});
    },
    //获取股票的信息
    haveStock(key) {
      vm.stocks = [];
      let date1 = new Date().getTime();
      getStock(date1,key,() => {
          let suggestdata = eval("suggestdata_"+date1);
          if(suggestdata==undefined||suggestdata==""){
              $(".os_home_dialog").css("height","0px");
              return;
          }
          $(".os_home_dialog").css("height","calc(100% - 1.2rem)");
          let arr = suggestdata.split(";");
        //   console.log(arr);
          //不是11的不要
          arr.forEach(elem => {
             let arr1 = elem.split(",");
             if(arr1[1] == 11){
                 let obj = {
                     stockCode: arr1[3].toUpperCase(),
                     stockName: arr1[4]
                 }
               obj.canAdd  = vm.stockeData.find(ele => {
                    return ele.stockCode.toLowerCase() == arr1[3];
                }) ? false : true;
                vm.stocks.push(obj);
             }

          })
      })
    },
    //搜索的功能股票的功能
    openDialog() {
      if(vm.stockStr == ''){
        vm.showClear = false;
      }else{
        vm.showClear = true;
      }
      let k = vm.stockStr;
      vm.haveStock(k);
    },
     //添加自选股票的功能
    addSelf_Stock(stockCode,stockName,index) {
      vm.stocks[index].canAdd = false;
      APIS.addSelfStock(stockCode,stockName).then(res => {
          if(res.code == 0){
             vm.getStocks();
          }
      })
    },
    //清除按钮
    clearNth() {
       vm.stockStr = "";
       vm.showClear = false;
       $(".os_home_dialog").css("height","0px");
    }
   }
 }
</script>
