<style>
	.rep-cont{
		height:100%;
		background:#fff;
	}
	.rep-table {
		width: 100%;
		border-collapse: collapse;
		background: #fff;
		border-bottom:0.03rem solid #e6e6e6;
	}
	.rep-table th {
		border: 0.03rem solid #EAEAEA;
		border-top-style: none;
		border-right-color: #fff;
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
		font-size: 0.36rem;
		width: 25%;
		color: rgb(66, 66, 66);
	}
	.rep-table td {
		font-weight: 500;
		text-align: center;
		font-size: 0.38rem;
		color: rgb(66, 66, 66);
		border-top: 0.03rem solid #e6e6e6;
		line-height: 0.55rem;
		padding: 0.20rem 0 0.15rem 0;
	}
	.rep-sp1 {
		padding: 0.1rem 0;
		font-weight: 500;
		line-height: 0.55rem;
	}
	.rep-sp2 {
		display: inline-block;
		background: #0F791A;
		padding: 0.09rem 0.16rem;
		color: white;
		cursor: pointer;
	}
	.noRepealData {
		width:100%;
		padding-top:3rem;
		text-align: center;
	}
	.noRepealData img {
		width: 2rem;
		height: 2rem;
	}
	.font3{font-size: 0.35rem;}
	.font5{font-size: 0.42rem;}
</style>
<template>
	<div class="container">
		<div class="rep-cont">
			<table class="rep-table">
				<tr>
					<th>股票/时间</th>
					<th>委托/现价</th>
					<th>委托/成交</th>
					<th>状态</th>
				</tr>
				<tr v-for="tf in tableForm" v-if="tableForm">
					<td>
						<span class="rep-sp1 font5">{{tf.stockName}}</span><br />
						<span class="rep-sp1 font3">{{tf.dateAdd}}</span>
					</td>
					<td>
						<span class="rep-sp1">{{tf.entrustPrice}}</span><br />
						<span class="rep-sp1">{{tf.price}}</span>
					</td>
					<td>
						<span class="rep-sp1">{{tf.number}}</span><br />
						<span class="rep-sp1">{{tf.numberDone}}</span>
					</td>
					<td>
						<span class="rep-sp1" style="color:#0F791A">{{tf.statusStr}}</span><br />
						<span class="rep-sp2" @click='cancelOrder($event,tf.id)' v-show="tf.status != 41? true : false">撤单</span>
					</td>
				</tr>
			</table>
			<div class='noRepealData' v-if='tableForm.length == 0'>
				<p><img src="../assets/img/base2.png" alt="" /></p>
				暂无记录
			</div>
		</div>
	</div>
</template>
<script>
	/**
	 * status !=41 可撤
	 */
	import APIS from '@/utils/apis'
	import 'vue-layer-mobile/need/layer.css' //弹出框
	import layer from 'vue-layer-mobile'
	export default {
		data() {
			return {
				tableForm: [],
				cyr: undefined,
				canCyr: true
			}
		},
		beforeDestroy() {
			this.tableForm = undefined;
			window.clearInterval(this.cyr);
			this.cyr = undefined;
			this.canCyr = true;
		},
		mounted() {
			let _this = this;
			_this.circulatoryRevok();
		},
		methods: {
			//获取可撤单数据
			getRevokeList() {
				let _this = this;
				APIS.getRevokeList().then(res => {
					_this.tableForm = [];
					if(res.code == 0) {
						// let arrs = [];
						let data1 = res.data.entrustOrderses;
						let data2 = res.data.acountCashAggregationBean;
						data1.forEach(elem => {
							let obj = {
								stockName: elem.stockName,
								stockCode: elem.stockCode,
								dateAdd:elem.dateAdd,
								id:elem.id,
								number: elem.number,
								numberDone: elem.numberDone,
								entrustPrice: elem.entrustPrice,
								statusStr: elem.statusStr,
								status: elem.status,
								price:0
							}
							if(elem.behavior == 0){//买
								obj.price = data2.stockEntrustBuyPriceMap[elem.stockCode].price
							}else{
								obj.price = data2.stockPriceMap[elem.stockCode].price
							}
							_this.tableForm.push(obj);
						})
					}
					_this.canCyr = true;
				}).catch(err => {
					console.log(err);
					 _this.canCyr = true;
				})
			},
			//撤单
			cancelOrder(e,id) {
				let _this = this;
				layer.dialog({
	                title: ['信息', 'background:deepskyblue;color:white;'],
	                content: '是否确认撤单',
	                btn: ['取消','确定']
	            }).then(function (res) {
//	            	let position = res === 0 ? 'left' : 'right'
					if(res == 1){
						APIS.cancelOrder(id).then(function(result){
//							console.log(res)
							if(result.code == 0){
								// _this.getRevokeList();

							}else{
								layer.toast({
						            icon: '',
						            content: result.msg,
						            time: 2000
						        })
							}
						}).catch(function(error){
							console.log(error)
						})
					}

	           })
			},
		//开始循环调取撤单的界面
		 circulatoryRevok(){
			let _this = this; 
            _this.cyr = self.setInterval(function() {
				if(_this.canCyr){
				  _this.canCyr = false;
				  _this.getRevokeList();
				}
				
			},1000)
		 }	
		}
	}
</script>
