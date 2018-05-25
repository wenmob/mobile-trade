
<style>
	@import '../assets/css/common.css';
	.loginContainer{
		position:relative;
		background: #EEEEEE;
		height:100%;
	}
	.loginContainer .header{
		position: absolute;
	    width: 100%;
	    height: 1.2rem /* 44/16 */;
	    background-color: #AF282D;
	    top: 0;
	    left: 0;
	    z-index: 3000;
	    text-align: center;
	    line-height: 1.2rem;
	    color:#fff;
	}
	.loginContent{
		padding-top:1.2rem;
		width:100%;
		text-align:center;
	}
	.loginContent img{
		width:2.2rem;
		margin:1.5rem 0;
	}
	.loginForm{
		padding-left:4%;
		background:#fff;
		overflow:hidden;
		font-size:17px;
		text-align:left;
	}
	.loginForm label{
		display:inline-block;
		width:56px;
	}

	.loginForm p:nth-of-type(1){
		border-bottom:1px solid #eee;
		padding-bottom:0.4rem;
	}
	.loginForm input{
		padding-left:0.3rem;
		border:0;
		outline:0;
	}
	.loginContent button{
		margin-top:1.5rem;
		width:85%;
		height:1.1rem;
		border:0;
		color:#fff;
		outline:0;
		border-radius:0.15rem;
		font-size:0.5rem;
	}
</style>
<template>
	<div class='loginContainer'>
			<div class="header" ref='loginHeader'>
          	<span>登录</span>
      	</div>
      	<div class="loginContent" ref='loginContent'>
      		<img src="../assets/img/z-12.png" alt="" />
      		<div class="loginForm"  @keyup.enter="login">
      			<p>
      				<label for="username">用户名</label>
      				<input type="text" v-model='username' @keyup="changeInfo" id='username' placeholder="用户名"/>
      			</p>
      			<p>
      				<label for="password">密码</label>
      				<input type="password" v-model='password' @keyup="changeInfo" id='password' placeholder="密码"/>
      			</p>
      		</div>
      		<button :style="{background:canButton? '#AF282D' : '#ccc'}" @click='login'>登 录</button>
      	</div>
      	<fot></fot>
	</div>
</template>

<script>
	import APIS from '@/utils/apis'
	import { setToken, removeDomain } from '@/utils/auth'
	import fot from '@/components/plugin/Footer'
	let vm;
	export default{
		data(){
			return{
				username:'',
				password:'',
				canButton:false
			}
		},
		components:{
		  	'fot':fot
		},
		mounted(){
			vm = this;
			if(vm.isWeiXin()){
				vm.$refs.loginHeader.style.display = "none";
				vm.$refs.loginContent.style.top = "0rem";
			} else {
	//    console.log("不是来自微信内置浏览器");
			}
		},
		methods:{
			//控制登录按钮背景色
			changeInfo(){
//				console.log(vm.username,vm.password)
				if(vm.username != '' && vm.password != ''){
					vm.canButton = true
				}else{
					vm.canButton = false
				}
			},
			//登录
			login(){
				APIS.login(vm.username,vm.password)
				.then(function(res){
//					console.log(res)
					if(res.code == 0){
						vm.$layer.open({
//				            icon: 'icon-check',
				            content: '登录成功',
				            skin:'msg',
				            time: 3000
						})
						removeDomain();
						setTimeout(function () {
		                	setToken(res.data)
							vm.$router.push('position')
			            },3000)

					}else if(res.code == 601 || res.code == 600){
						vm.$layer.toast({
				            icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
				            content: res.data,
				            time: 3000
			            })
					}else{
						vm.$layer.toast({
				            icon: 'icon-check',
				            content: res.msg,
				            time: 3000
			            })
					}
				})
				.catch(function(error){
					console.log(error)
				})
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
