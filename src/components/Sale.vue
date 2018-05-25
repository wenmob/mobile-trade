<style>
   @import '../assets/css/common.css';
   .saleContainer{
   		height:100%;
	   	background:#fff;
   }
</style>
<template>
   <div class="container">
   	<div class="saleContainer">
   		<trade ref="trade"></trade>
	    <div style='height:0.23rem;background:#eee;'></div>
	    <position ref="position" v-on:listenPosition="getPositionObject"></position>
   	</div>
   </div>
</template>
<script>
import Trade from './plugIn/Trade'
import Position from './plugIn/Position'
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
          _this.$refs.trade.type = 1;
          _this.$refs.trade.initPos();
      },
      getPositionObject(somedata) {
          let _this = this;
          _this.$refs.trade.canBuyNum = somedata.positionCommonData.positions;
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


