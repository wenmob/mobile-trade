<style>
   @import '../../assets/css/common.css';
   .OS_EDITOR_CONT{
       width: 100%;
       height: auto;
       background-color: white;
   }
   .OS_EDITOR_th{
       padding-left: 0.42rem;
       padding-right: 0.42rem;
       height: 1.0rem;
       border-bottom: 0.03rem solid #eeeeee;
   }
   .OS_EDITOR_th .s1{
       float: left;
       font-size: 0.42rem;
       margin-top: 0.3rem;
       margin-left: 1.2rem;
       font-weight: 500;
   }
   .OS_EDITOR_th .s2{
       float: left;
       font-size: 0.42rem;
       margin-top: 0.3rem;
       margin-left: calc(50% - 2.6rem);
       font-weight: 500;
   }
   .OS_EDITOR_th .s3{
       float: right;
       font-size: 0.42rem;
       margin-top: 0.3rem;
       margin-right: 0;
       font-weight: 500;
   }
   .list-group{
       -webkit-margin-before: 0;
       -webkit-margin-after: 0;
       -webkit-margin-start: 0px;
       -webkit-margin-end: 0px;
       -webkit-padding-start: 0px;
        padding-left: 0.42rem;
        
   }
   .list-group li{
       list-style: none;
   }
   .list-group-item{
       height: 1.0rem;
        border-bottom: 0.03rem solid #eeeeee;
        background-color: white;
        transition: all .5s;
   }
   .list-group-item .check{
       float: left;
       width: 0.46rem;
       height: 0.46rem;
       background-color: red;
       margin-left: 0rem;
       margin-top: 0.26rem;
   }
   .list-group-item .check img{
       width: 0.45rem;
   }
   .list-group-item .title{
      float: left;
      margin-top: 0.26rem;
      margin-left: 0.76rem;
      font-size: 0.42rem;
      font-weight: 500;
      width: 2.6rem;
   }
   .list-group-item .m1{
       float: left;
       width: 0.63rem;
       margin-top: 0.16rem;
       margin-left: calc(50% - 3.66rem);
   }
   .list-group-item .m2{
       float: right;
       width: 0.63rem;
       margin-top: 0.16rem;
       margin-right: 0.45rem;
   }
   .opacityClass{
     opacity: 0;
   }
   .dragClass{
     -moz-box-shadow:2px 2px 5px #333333; 
     -webkit-box-shadow:2px 2px 5px #333333; 
     box-shadow:2px 2px 5px #333333;
     opacity: 1;
     transition: all 0s;
   }
   .OS_EDITOR_Fot{
       position: fixed;
       width: 100%;
       height: 1.2rem;
       background-color: #cccccc;
       left: 0;
       bottom: 0;
   }
   .OS_EDITOR_Fot img{
       width: 0.8rem;
       margin-top: 0.14rem;
   }
</style>
<template>
   <div class="container">
     <div class="OS_EDITOR_CONT">
       <!--标题-->  
       <div class="OS_EDITOR_th">
          <span class="s1">股票代码</span>
          <span class="s2">置顶</span>
          <span class="s3">拖动</span>
          <div style="clear:both"></div>
       </div>
       <!--表格内容--> 
       <ul class="list-group" id="items">
           <li class="list-group-item" v-for="(st,index) in stocks">
             <div class="check" :style="st.ischoose == true?'background-color:#AF282D':'background-color:#D1D1D1'" @click="clickLi(index)"><img v-show="st.ischoose" src="../../assets/img/s-03.png"/></div>
             <span class="title" :ids="st.id">{{st.stockName}}</span> 
             <img class="m1" src="../../assets/img/s-01.png" @click="goTop($event)"/>
             <img class="m2 handle" src="../../assets/img/s-02.png"/>
           </li>
           
       </ul>
     </div>
     <!--底部删除功能-->
     <div class="OS_EDITOR_Fot" ref="os_fot" align="center" @click="delStocks">
        <img src="../../assets/img/delstocks.png"/>
     </div>
   </div>
</template>
<script>
let vm;
import Sortable from 'sortablejs';
import APIS from '../../utils/apis';
export default {
  data() {
      return { 
         delArr: undefined,
         stocks:[],
         stockIds: []
      }
  },
  mounted() {
    vm = this;
    vm.delArr = new Set();
    vm.getStocks();
    
  },
  methods: {
     getStocks() {
        APIS.getSelfStockList().then(res => {
            if(res.code == 0) {
                res.data.forEach(element => {
                    element.ischoose = false;
                    vm.stocks.push(element);
                });
                vm.sortableInit();
            }
        })
     },
     sortableInit() {
         let dox = document.getElementById("items");
         let sortable = new Sortable(dox,{
            sort: true,
            delay: 0,
            animation: 150,
            handle: ".handle",
            chosenClass: "opacityClass",
            dragClass: "dragClass",
            onEnd: function (evt) {
                vm.stockIds = [];
                let paixuArray = [];
                $('.list-group-item .title').each(function (index,element) {
                    vm.stockIds.push($(element).attr("ids"));
                    paixuArray.push(index);
                })
               APIS.setStockList(vm.stockIds,paixuArray).then(res => {
                   if(res.code == 0){
                      //什么都不做
                   }
               })
            }
         })
     },
     clickLi(n) {
       if(vm.stocks[n].ischoose){
            vm.stocks[n].ischoose = false;
            vm.delArr.delete(vm.stocks[n]);
            vm.$refs.os_fot.style.backgroundColor = vm.delArr.size == 0 ? "#cccccc" : "#E8302E";
       }else{
           vm.stocks[n].ischoose = true;
           vm.$refs.os_fot.style.backgroundColor = "#E8302E";
           vm.delArr.add(vm.stocks[n]);
       }
       
     },
     goTop(e) {
       let ele = e.target.parentElement;
       $("#items li:eq(0)").before($(ele));
       vm.stockIds = [];
       let paixuArray = [];
       $('.list-group-item .title').each(function (index,element) {
            vm.stockIds.push($(element).attr("ids"));
            paixuArray.push(index);
        })
        APIS.setStockList(vm.stockIds,paixuArray).then(res => {
            if(res.code == 0){
                //什么都不做
            }
        })

     },
     delStocks() {
         if(vm.delArr.size == 0){
             return;
         }
         let stockIds = [...vm.delArr];
         for(let i = 0; i< stockIds.length; i++){
             if(i == (stockIds.length -1)){
                vm.$refs.os_fot.style.backgroundColor = "#cccccc";
             }
             $(".list-group-item .title").each(function (index,element) {
                        if(stockIds[i].id == $(element).attr("ids")){
                            $(".list-group-item").eq(index).remove();
                        }
             })
             APIS.delSelfStocks(stockIds[i].id).then(res => {
                 if(res.code == 0){
                    //什么都不做
                 }
             })
         }
     }
  
  }
}
</script>


