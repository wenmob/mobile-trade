<style>
	a{
		text-decoration: none;
	}
	.pos-container {
		position: relative;
		height: auto;
		width: 100%;
	}
	.pos-tb {
		width: 100%;
		border-collapse: collapse;
		background-color: #fff;
		border-bottom:0.03rem solid #e6e6e6;
	}
	.pos-tb th {
		font-size: 0.38rem;
		color: rgb(66, 66, 66);
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		
	}
	.pos-tb td {
		font-weight: 500;
		text-align: center;
		font-size: 0.38rem;
		color: rgb(66, 66, 66);
		border-top: 0.03rem solid #e6e6e6;
		line-height: 0.55rem;
		padding: 0.20rem 0 0.15rem 0;
	}
	.pos-sp {
		display: block;
		/*font-weight:600;*/
	}
	.pos-atn {
		display: inline-block;
		width: 38%;
		padding:0.05rem 0;
		font-size:0.38rem;
		color:#fff;
		border-radius:50px;
	}
	.noData {
		text-align: center;
		font-size: 0.42rem;
	}
	.noData p{margin-bottom: 0.2rem;}
	.noData img {
		width: 1.4rem;
		height: 1.4rem;
	}
	.font3{font-size: 0.35rem;}
	.font5{font-size: 0.42rem;}
</style>
<template>
	<div class="pos-container">

		<table class="pos-tb">
			<tr>
				<th>市值</th>
				<th>持仓/可用</th>
				<th>现价/成本</th>
				<th>总盈亏</th>
			</tr>
			<template v-if='positionCommonData.positions.length > 0' v-for="(tab,index) in positionCommonData.positions">
				<tr @click="clickTr(index)">
					<td>
						<span class="pos-sp font5" style="">{{tab.stockName}}</span>
						<span class="pos-sp font3" style="">
							{{(positionCommonData.acountCashAggregationBean.stockPriceMap[tab.stockCode].totleAmount).toFixed(3)}}
						</span>
					</td>
					<td>
						<span class="pos-sp" style="">{{tab.number}}</span>
						<span class="pos-sp" style="">{{tab.numberCanUse}}</span>
					</td>
					<td>
						<span class="pos-sp" style="">
							{{tab.curPrice}}
						</span>
						<span class="pos-sp" style="">{{tab.priceCost.toFixed(3)}}</span>
					</td>
					<td :style="tab.profit >= 0 ? 'color:red':'color:#36D671'">
						<span class="pos-sp">
							{{tab.profit}}
						</span>
						<span class="pos-sp">
							{{tab.number == 0? ((tab.profit/tab.costTotle)*100).toFixed(3) : (tab.profit/(tab.priceCost*tab.number)*100).toFixed(3)}}%
						</span>
					</td>
				</tr>
				<tr class="tsp" style="display: none">
					<td colspan="2" style='border-top:0'>
						<a class="pos-atn" style="background:#F70303" @click='pushBuy(tab.stockCodeFull,tab.stockName)'>买入</a>
					</td>
					<td colspan="2" style='border-top:0'>
						<a class="pos-atn" style="background:#1298FF" @click="pushSale(tab.stockCodeFull,tab.stockName)">卖出</a>
					</td>
				</tr>
			</template>
		</table>
		<div class='noData'  v-if="positionCommonData.positions.length<=0">
			<p><img src="../../assets/img/base2.png" alt="" /></p>
			暂无记录
		</div>
	</div>
</template>
<script>
	import APIS from '@/utils/apis'
	let vm;
	export default {
		data() {
			return {
				explanIndex: [],
				positionCommonData:{
					positions:[]
				},
				autoPos: undefined,
				startg: true
			}
    },
    beforeDestroy(){
        vm.positionCommonData = {};
		window.clearInterval(vm.autoPos);
		vm.autoPos = undefined;
		vm.startg = true;
	},
	mounted() {
		vm = this;
		// this.positionCommon();
        this.autoPos = self.setInterval(() => {
			if(vm.startg){
			   vm.startg = false;
               vm.positionCommon();
			}
		},1000);
	},
	methods: {
			positionCommon() {
				APIS.positionCommon()
				.then(function(res) {
				   vm.positionCommonData = res.data;
					if(res.code != 0){
						vm.startg = true;
						return;
					}
					vm.positionCommonData.positions.forEach(function(item,index){
						item.numberCanUse = item.number - item.numberFreeze;//当天可以卖出的股票
						item.curPrice = (vm.positionCommonData.acountCashAggregationBean.stockPriceMap[item.stockCode].price).toFixed(3);
						item.profit = item.number == 0? item.profix.toFixed(3) : (item.number * item.curPrice - item.costTotle).toFixed(3);
						// item.profit = item.profit
						item.tradeCan = false;
					});
					vm.$emit('listenPosition',{positionCommonData:vm.positionCommonData});
                    vm.startg = true;
				})
				.catch(function(error) {
					vm.startg = true;
					console.log(error)
				})
			},
			clickTr(n){
			  let _this = $('.tsp').eq(n);	
			  if(_this.css('display') == "none"){
				  _this.show();
				  $(".tsp").not(_this).hide();
			  }else{
				  _this.hide();
			  }
			  
			},
			//去买入
			pushBuy(stockCode,stockName){
				// let stockStr = stockCode.toLowerCase() + "-" + stockName;
				let isLoad = false;
				if(vm.$route.path == "/"){
					isLoad = true;
				}
                vm.$router.push({path:'/',query:{stockCode:stockCode.toLowerCase(),stockName:stockName,load:isLoad}});
            },
            //去卖出
            pushSale(stockCode,stockName){
				// let stockStr = stockCode.toLowerCase() + "-" + stockName;
				let isLoad = false;
				if(vm.$route.path == "/sale"){
					isLoad = true;
				}
                vm.$router.push({path:'/sale',query:{stockCode:stockCode.toLowerCase(),stockName:stockName,load:isLoad}})
            }

		}
	}
</script>
