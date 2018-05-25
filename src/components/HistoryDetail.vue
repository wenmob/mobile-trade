
<style>
@import '../assets/css/common.css';
.historyDetailHeader{
    width: 100%;
    height: 1.2rem /* 44/16 */;
    background-color: #AF282D;
    z-index: 3000;
    text-align: center;
    line-height: 1.2rem;
    color:#fff;
}
.historyDetailHeader img{
  position: absolute;
  width: 0.62rem;
  left: .3375rem; /* 15/16 */
  top: 0.26rem;
}
.datail{
	position:absolute;
	width:100%;
	font-size: 0.35rem;
	color: rgb(66, 66, 66);
}
.datail dl{
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-top: 1px solid #e6e6e6;
  margin:0;
}
.datail dl dd{
  display: block;
  height: 1.2rem;
  line-height: 1.2rem;
  border-bottom: 1px solid #e6e6e6;
}
.datail dl dd span{
  float: right;
  padding-right: 30px;
}

</style>
<template>
  <div class="container">
    <div class="historyDetailHeader" ref='historyDetailHeader'>
        <img src="../assets/img/back.png" @click="goBack"/>
        <span>订单详情</span>
    </div>
    <div class="datail" v-if='historyDetailData' ref='historyDetail'>
      <dl>
        <dd>
          订单编号<span>{{historyDetailData.id}}</span>
        </dd>
        <dd>
          证券代码<span>{{historyDetailData.stockCode}}</span>
        </dd>
        <dd>
          证券名称<span>{{historyDetailData.stockName}}</span>
        </dd>
        <dd>
          交易类型<span>{{historyDetailData.behaviorStr}}</span>
        </dd>
        <dd>
          委托日期<span>{{historyDetailData.dateAdd}}</span>
        </dd>
        <dd>
          成交日期<span>{{historyDetailData.dateUpdate}}</span>
        </dd>
        <dd>
        委托数量<span>{{historyDetailData.number}}</span>
        </dd>
        <dd>
          成交数量<span>{{historyDetailData.numberDone}}</span>
        </dd>
        <dd>
          成交均价<span>{{historyDetailData.averagePrice}}</span>
        </dd>
        <dd>
          成交金额<span>{{historyDetailData.averagePrice * historyDetailData.number}}</span>
        </dd>
        <dd>
          发生金额<span>{{historyDetailData.costTotle}}</span>
        </dd>
        <dd>
          交易手续费<span>{{historyDetailData.commission + historyDetailData.stamptax +  historyDetailData.transferFees}}</span>
        </dd>
        <dd>
          状态<span>{{historyDetailData.statusStr}}</span>
        </dd>
      </dl>
    </div>
  </div>

</template>

<script>
import APIS from '@/utils/apis'
let vm;
export default{
  data(){
    return{
        id:'',
        historyDetailData:undefined
    }
  },
  mounted(){
    vm = this;
    this.id = this.$route.query.id
    vm.historyInfoDetail()

    if(vm.isWeiXin()){
      vm.$refs.historyDetailHeader.style.display = "none";
    } else {
//    console.log("不是来自微信内置浏览器");
    }
  },
  methods:{
      historyInfoDetail(){
          APIS.historyInfoDetail(vm.id)
          .then(function(res){
               console.log(res)
            if(res.code != 0){
              return
            }
            vm.historyDetailData = res.data
          })
          .catch(function(error){
            console.log(error)
          })
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
      }
  }
}
</script>
