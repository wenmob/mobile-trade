<style>
   @import '../assets/css/common.css';
   .buyContainer{
	   	height:100%;
	   	background:#fff;
   }
</style>
<template>
	   	<div class="container">
	   		<div class="buyContainer">
	   			<trade ref="trade"></trade>
	   			<div style='height:0.23rem;background:#eee;'></div>
	      		<position ref="position" v-on:listenPosition="getPostiongggggg"></position>
	   		</div>
	   	</div>
</template>
<script>
import Trade from './plugIn/Trade'
import Position from './plugIn/Position'
import APIS from '@/utils/apis'

export default {
  data() {
      return {

      }
  },
  components: {
     "trade": Trade,
     "position": Position
  },
  mounted() {
    let _this = this;
    _this.changeTrade();

  },
  methods:{
      //对组件的trade进行修改
      changeTrade() {
          let _this = this;
          _this.$refs.trade.type = 0;
          _this.$refs.trade.initPos();
      },
      getPostiongggggg(somedata){
          let _this = this;
          let acountCashAggregationBean = somedata.positionCommonData.acountCashAggregationBean;
          let balance = acountCashAggregationBean.balance;
          let limitAmout = acountCashAggregationBean.limitAmount;
          let x1 = balance - limitAmout;
          _this.$refs.trade.myPrice = x1; //给交易用户的金额 赋值
          _this.$refs.trade.changeStockNum();
          let stockPositions = somedata.positionCommonData.positions;
          stockPositions.forEach(elem => {
            _this.stockPosition.set(elem.stockCodeFull.toLowerCase(),elem.number);
          })
      }
  },
  watch: {
      "$route.query": (data) => {
        if(data.load){
            window.location.reload();
        }
      }
  }
}
</script>


