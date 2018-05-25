<style>
	@import '../../assets/css/common.css';
	.userInfo{
		width:97%;
		background:#fff;
		padding-left:3%;
	}
	.userAbout{
		width:97%;
		background:#fff;
		padding-left:3%;
		margin-top:0.3rem;
	}
	.userContent p{
		margin:0;
		padding:0.4rem 3% 0.5rem 0;
		height:0.4rem;
		border-bottom:1px solid #eee;
	}
	.userContent p span:nth-of-type(1){
		float:left;
	}
	.userContent p span:nth-of-type(2){
		float:right;
	}
	.userContent p img{
		width:0.35rem;
		height:0.6rem;
	}
	.userContent button{
		width:90%;
		height:1.1rem;
		margin:1rem 5%;
		border:0;
		color:#fff;
		background:#F70303;
		border-radius:0.1rem;
		outline:0;
	}
</style>
<template>
	<div class='container'>
		<div class='userContent'>
			<div class="userInfo" v-if='userInfoData'>
				<p>
					<span>姓名</span>
					<span>{{userInfoData.name}}</span>
				</p>
				<p>
					<span>账户</span>
					<span>{{userInfoData.id}}</span>
				</p>
				<router-link to='user/changePaw' style='border:0;' tag='p'>
					<span>修改密码</span>
					<span><img src="../../assets/img/z-05.png"/></span>
				</router-link>
			</div>
			<div class="userAbout">
				<router-link to='user/about' style='border:0;' tag='p'>
					<span>关于</span>
					<span><img src="../../assets/img/z-05.png"/></span>
				</router-link>
			</div>
			<button @click='loginout'>退出账号</button>
		</div>
		<fot></fot>
	</div>
</template>
<script>
	import fot from '@/components/plugin/Footer'
	import APIS from '@/utils/apis'
	import { removeToken } from '@/utils/auth'
	let vm;
	export default{
		data(){
			return{
				userInfoData:undefined
			}
		},
		components:{
			'fot':fot
		},
		mounted(){
			vm = this;
			vm.userInfo()
		},
		methods:{
			userInfo(){
				APIS.userInfo()
				.then(function(res){
//					console.log(res)
					if(res.code != 0){
						return
					}
					vm.userInfoData = res.data
				})
				.catch(function(error){
					console.log(error)
				})
			},
			changePaw(){
				this.$router.push('user/changePaw')
			},
			//退出
			loginout(){
				APIS.loginout()
				.then(function(res){
					// console.log(res)
					if(res.code == 0){
						removeToken()
						vm.$router.push('login')
					}
				})
				.catch(function(error){
					console.log(error)
				})
			}
		}
	}
</script>
