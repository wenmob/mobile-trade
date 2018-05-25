<style scoped>
	/*@import '../assets/css/common.css';*/
	.historyContainer{
		height:100%;
		background:#fff;
	}
	.dateDiv{
		display:flex;
		justify-content: space-around;
		background:#fff;
		text-align:center;
	}
	.choseDate{
		position:relative;
		width:2.6rem;
	}
	.contact{
		margin-top:1rem;
	}
	.contact img{
		width:0.8rem;
	}
	input[type="date"]{
		width:1.2rem;
		height:0.4rem;
		border:1px solid #e6e6e6;
		-moz-appearance:none;
		position:absolute;
		top:0;
		left:0;
		opacity:0;
	}
	.historyTable{
		text-align:center;
		background:#fff;
		border-top:1px solid #e6e6e6;
		border-left:1px solid #e6e6e6;
		width:100%;
		margin:0 auto;
		/*margin-top:0.3rem;*/
		border-collapse: collapse;
		/* font-size:14px; */
	}
	.historyTable th{
		font-size: 0.38rem;
		color: rgb(66, 66, 66);
		padding-top: 0.3rem;
		padding-bottom: 0.3rem;
	}
	.historyTable tr{
		border-bottom:1px solid #e6e6e6;
		color: rgb(66, 66, 66);
	}
	.historyTable td{
		font-weight: 500;
		text-align: center;
		font-size: 0.38rem;
		border-top: 0.03rem solid #e6e6e6;
		line-height: 0.55rem;
		padding: 0.20rem 0 0.15rem 0;
	}
	.historyTable p{
		margin: 0;
	}
	.buy{
		color:#F70303;
	}
	.sell{
		color:#36D671;
	}
	.noHistoryData{
	  	text-align:center;
	  	margin-top:2rem;
	}
	.noHistoryData img{
	  	width:2rem;
	 	height:2rem;
	}
	.font3{font-size: 0.35rem;}
	.font5{font-size: 0.42rem;}
</style>
<template>
	<div class="container">
		<div class="historyContainer">
			<div class="dateDiv">
				<div>
					<p>起始日期</p>
					<p class='choseDate'>
						<span>{{startDate}}</span>
						<input type="date" @change='changeDate' v-model='startDate' value-format="yyyy-MM-dd"/>
					</p>
				</div>
				<div class='contact'>
					<img src="../assets/img/contact.png"/>
				</div>
				<div>
					<p>起始日期</p>
					<p class='choseDate'>
						<span>{{endDate}}</span>
						<input type="date" @change='changeDate' v-model='endDate' value-format="yyyy-MM-dd"/>
					</p>
				</div>
			</div>
			<div style='height:0.23rem;background:#eee;'></div>
			<table class='historyTable'>
				<tr>
					<th>名称代码</th>
					<th>委托/成交均价</th>
					<th>委托/成交数量</th>
					<th>状态&nbsp;&nbsp;&nbsp;&nbsp;</th>
				</tr>
				<tr v-if="historyData" v-for='item in historyData' @click='historyDetail(item.id)'>
					<td>
						<span class="font5">{{item.stockName}}</span><br />
						<span class="font3">{{item.stockCode}}</span>
					</td>
					<td>
						<p>{{item.entrustPrice}}</p>
						<p>{{item.averagePrice}}</p>
					</td>
					<td>
						<p>{{item.number}}</p>
						<p>{{item.numberDone}}</p>
					</td>
					<td :class="item.behavior === 1 ? 'sell' : 'buy'">{{item.statusStr}}&nbsp;&nbsp;&nbsp;&nbsp;</td>
				</tr>
			</table>
			<div class='noHistoryData'  v-if="!historyData">
				<p><img src="../assets/img/base2.png" alt="" /></p>
				暂无记录
			</div>
		</div>
	</div>
</template>

<script>
	import APIS from '@/utils/apis'
	let vm;
	export default{
		data(){
			return{
				startDate:'--',
				endDate:'--',
				historyData:undefined
			}
		},
		beforeDestroy(){
//         this.historyData = undefined
        },
		mounted(){
			vm = this;
			vm.historyInfo();
		},
		methods:{
			historyInfo(){
				APIS.historyInfo(vm.startDate,vm.endDate)
				.then(function(res){
//					console.log(res)
					if(res.code != 0){
						return
					}
					vm.historyData = res.data.entrustOrderss
					console.log(vm.historyData)
				})
				.catch(function(error){
					console.log(error)
				})


			},
			changeDate(){
				this.historyData = undefined
				vm.historyInfo()
			},
			historyDetail(id){
				this.$router.push({path:'historyDetail',query:{id:id}})
			}
		}
	}
</script>
