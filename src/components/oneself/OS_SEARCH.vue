<style>
   @import '../../assets/css/common.css';
   .OS_SEARCH_Head{
       padding-left: .44rem;
       padding-right:  .44rem;
       height: 1.23rem;
       background-color: white;
       border-bottom: 0.03rem solid #eeeeee;
       padding-top: 0.20rem;
   }
   .searchd{
     position: relative;
     width: 100;
     height: 1.0rem;
     background-color: #eeeeee;
     border-radius: 1.0rem;
   }
   .searchd .in1{
       position: absolute;
       background-color: transparent;
       left: 0.44rem;
       height: 0.74rem;
       width: 80%;
   }
   .searchd .m1{
       position: absolute;
       width: 0.54rem;
       right: 0.34rem;
       top: 0.16rem;
   }
   .OS_SEARCH_CONT{
       padding-left: .44rem;
       background-color: white;
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
      border-bottom: 0.03rem solid #EEEEEE;
   }
   .OS_SEARCH_CONT_t1 .b2{
       border-bottom-style: none;
   }
   .OS_SEARCH_CONT_t1-m1{
       width: 0.48rem;
       margin-top: 0.06rem;
   }
</style>
<template>
   <div class="container">
     <div class="OS_SEARCH_Head">
         <div class="searchd">
            <form> 
             <input type="text" class="in1" id="intest" ref="in1" autofocus v-model="stockStr" placeholder="请输入股票或股票代码" @input="searchStock"/> 
             <img src="../../assets//img/z-02.png" class="m1"/>
            </form>
         </div>
     </div>
     <div class="OS_SEARCH_CONT">
        <table class="OS_SEARCH_CONT_t1">
           <tr v-for="(st,index) in stocks" @click="goStockDetail(st.stockName,st.stockCode,st.canAdd,st.id)">
               <td :class="index == (stocks.length-1) ?'b2':'b1'">{{st.stockName}}</td>
               <td :class="index == (stocks.length-1) ?'b2':'b1'">{{st.stockCode}}</td>
               <td :class="index == (stocks.length-1) ?'b2':'b1'" style="text-align:right;padding-right:0.58rem;"><img v-show="st.canAdd" class="OS_SEARCH_CONT_t1-m1" src="../../assets/img/z.png" @click="addSelf_Stock(st.stockCode,st.stockName,index)"/></td>
           </tr>
        </table>
     </div>
   </div>
</template>
<script>
import APIS from '../../utils/apis';
import { getStock,getBuyAndSale } from '@/utils/utools';
let vm;
export default {
  data() {
      return {
         stockStr:"",
         stockds: [],
         stocks:[]
      }
  },
  mounted() {
      vm = this;
      vm.getStocks();
      $("#intest").trigger("click").focus(); 
      if(window.plus){   
        vm.plusReady();  
      }else{
       document.addEventListener("plusready",vm.plusReady,false);  
      }  
  },
  methods: {
      plusReady(){  
      // 获取所有Webview窗口  
       let webView = plus.webview.currentWebview().nativeInstanceObject(); 
       webView.plusCallMethod({"setKeyboardDisplayRequiresUserAction":false});
       document.getElementById("intest").focus();
      },
     //进入界面时候调取已选的股票
      getStocks() {
        APIS.getSelfStockList().then(res => {
            if(res.code == 0) {
                if(res.data.length > 0){
                  res.data.forEach(element => {
                    element.currentPrice = "--";
                    element.linePrice = 0;
                    element.zd = "--";
                  });
                  vm.stockds = res.data;
                }     
            }
        })
     },
     //搜索的功能
     searchStock(){
         let k = vm.stockStr;
         vm.haveStock(k);
     },
      //获取股票的信息
    haveStock(key) {
      vm.stocks = [];
      let date1 = new Date().getTime();
      getStock(date1,key,() => {
          let suggestdata = eval("suggestdata_"+date1);
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
               obj.canAdd  = vm.stockds.find(ele => {
                    return ele.stockCode.toLowerCase() == arr1[3];
                }) ? false : true;
                vm.stocks.push(obj);
             }

          })
      })
    },
    //添加自选股票的功能
    addSelf_Stock(stockCode,stockName,index) {
      vm.stocks[index].canAdd = false;
      APIS.addSelfStock(stockCode,stockName).then(res => {
          if(res.code == 0){
             //什么也不需要做
          }
      })
    },
    //跳转到自选详情中
    goStockDetail(stockName,stockCode,canAdd,id) {
        let isSelf = false;
        if(!canAdd){
         isSelf = true;
        }
        vm.$router.push({path:'/oneself/stockDetail',query:{stockCode:stockCode,isSelf:isSelf,id:id}});
       
    }
  }
}
</script>


