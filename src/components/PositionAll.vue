<style>
	.positionContainer{
		height:100%;
		background:#fff;
	}
	.middle{
		background:#fff;
		padding: 0.6rem 0 0.4rem 0;
	}
	.middle p{
		font-size: 12px;
		color: rgb(102,102,102);
		width: 100%;
	}
	.middle p:nth-of-type(1){
		text-align:center;
		margin: 0.1rem 0;
	}
	.middle p:nth-of-type(2){
		margin:0;
		text-align:center;
		color: red;
		font-size: 36px;
		font-weight: 500;
		padding-top:0.1rem;
	}
	.Percentage{
		margin:0;
	}
	.Percentage span{
		position:relative;
		display:block;
		float:left;
		height: 0.1rem;
	}

	.Percentage{
		width:100%;
		font-weight:normal;
		padding:0;
		text-align: center;
	}
	.Percentage i{
		font-style:normal;
		color: red;
		padding: 0 3px;
		font-size: 14px;
		font-weight: 500;
	}
	.Percentage strong{
		position:absolute;
		width:1px;
		background:#eee;
	}
	.warningLine{
		position:relative;
		top:0.1rem;
		margin-bottom: 0;
	}
	.warningLine span{
		width: 32%;
		display: inline-block;
		text-align: center;
		line-height: 18px;
	}
	.warningLine span i{
		font-style:normal;
		font-size: 0.38rem;
		font-weight: 500;
		padding: 0 3px;
		color: rgb(51,51,51);
	}
</style>
<template>
	<div class='container'>
		<div class="positionContainer">
			<div class="middle">
				<p>总资产（元）</p>
				<p>
					{{acountCashAggregationBean.assets.toFixed(2)}}
				</p>
				<p class='Percentage'>
						可用余额<i>{{acountCashAggregationBean.balance.toFixed(2)}}</i>元
				</p>
				<p class='warningLine'>
					<span>
						总市值(元)<br /><i>{{acountCashAggregationBean.marketValue.toFixed(2)}}</i>
					</span>
					<span>
						预警线(元)<br /><i>{{acountCashAggregationBean.warningLine.toFixed(2)}}</i>
					</span>
					<span>
						平仓线(元)<br /><i>{{acountCashAggregationBean.closePositionLine.toFixed(2)}}</i>
					</span>
				</p>
			</div>
			<div style='height:0.23rem;background:#eee;'></div>
			<positionCommon ref='positionCommon' v-on:listenPosition="getPostion"></positioncommon>
		</div>
		
	</div>
</template>

<script>
	import positionCommon from './plugIn/Position'
	import APIS from '@/utils/apis'
	let vm;
	export default{
		data(){
			return {
				acountCashAggregationBean:{
					assets:0,//总资产
//					startValue:100000,//初期金额
					warningLine:0,//预警线
					closePositionLine:0,//平仓线
					balance:0,
					marketValue:0
				},
				positionLeft:'0',
				positionShow:'0',
				allMoneyPosition:''
			}
		},
		components:{
			'positionCommon':positionCommon
		},
		mounted(){
			vm = this;

		},
		methods:{
			getPostion: function (somedata){
              	this.acountCashAggregationBean = somedata.positionCommonData.acountCashAggregationBean
				this.acountCashAggregationBean.startValue = this.acountCashAggregationBean.bzj+this.acountCashAggregationBean.jkje
//				this.acountCashAggregationBean.startValue = 0
				vm.judgePosition()
			},
			//判断总资产位置
			judgePosition(){
//				console.log(this.acountCashAggregationBean)
				if(this.acountCashAggregationBean.assets >= this.acountCashAggregationBean.startValue){
					vm.positionLeft = '96.5%';
					vm.positionShow = '3'
					vm.allMoneyPosition = 'right:0'
					return
				}
				if(this.acountCashAggregationBean.assets < this.acountCashAggregationBean.startValue
					&& this.acountCashAggregationBean.assets >= this.acountCashAggregationBean.warningLine){
					//提示总资产的三角形位置
					let left = (138/(this.acountCashAggregationBean.startValue-this.acountCashAggregationBean.warningLine))*(this.acountCashAggregationBean.assets-this.acountCashAggregationBean.warningLine)-5
					vm.positionLeft = left+'px';
					vm.positionShow = '3'
					//总资产的位置
					if(left >= 80){
						vm.allMoneyPosition = 'right:0'
						return
					}
					vm.allMoneyPosition = 'left:'+(left-50)+'px'
					return
				}
				if(this.acountCashAggregationBean.assets < this.acountCashAggregationBean.warningLine
					&& this.acountCashAggregationBean.assets >= this.acountCashAggregationBean.closePositionLine){

					let left = (69/(this.acountCashAggregationBean.startValue-this.acountCashAggregationBean.closePositionLine))*(this.acountCashAggregationBean.assets-this.acountCashAggregationBean.closePositionLine)-5
					vm.positionLeft = left+'px';
					vm.positionShow = '2'
					vm.allMoneyPosition = 'left:'+(left-50)+'px'
					return
				}
				if(this.acountCashAggregationBean.assets < this.acountCashAggregationBean.closePositionLine
					&& this.acountCashAggregationBean.assets >= 0){

					let left = (138/this.acountCashAggregationBean.startValue)*(this.acountCashAggregationBean.assets)-5
					vm.positionLeft = left+'px';
					vm.positionShow = '1'
					if(left <= 40){
						vm.allMoneyPosition = 'left:0'
						return
					}
					vm.allMoneyPosition = 'left:'+(left-50)+'px'
					return
				}
				if(this.acountCashAggregationBean.assets < 0){
					vm.positionLeft = '0px';
					vm.positionShow = '1'
					vm.allMoneyPosition = 'left:0'
					return
				}

			}
		}
	}
</script>
