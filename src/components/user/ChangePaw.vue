<style>
	@import '../../assets/css/common.css';
	
	.changeFrom{
		width:97%;
		background:#fff;
		padding-left:3%;
	}
	.changeFrom p{
		position:relative;
		margin:0;
		padding:0.4rem 3% 0.5rem 0;
		height:0.4rem;
		border-bottom:1px solid #eee;
	}
	.changeFrom p input{
		padding:0;
		padding-left:0.3rem;
	}
	.changeFrom p span:nth-of-type(2){
		position:absolute;
		right:3%;
		color:#AF282D;
	}
	.submitPaw button{
		width:90%;
		height:1.1rem;
		margin:1rem 5%;
		border:0;
		color:#fff;
		border-radius:0.1rem;
		outline:0;
	}
</style>
<template>
	<div class='container'>
		<div class="changeFrom" @keyup.enter='changeTrue'>
			<p>
				<span>原密码</span>
				<input type="password" v-model='oldPaw' @keyup='showBtn'/>
			</p>
			<p>
				<span>新密码</span>
				<input type="password"  v-model='newPaw' @keyup='showBtn'/>
			</p>
			<p style='border:0;'>
				<span>确认新密码</span>
				<input type="password"  v-model='againPaw' @keyup='showBtn'/>
				<span v-if='diffShow'>密码不一致</span>
			</p>
		</div>
		<div class="submitPaw">
			<button :style="{background:btnShow ?'#AF282D':'#ccc'}" @click='changeTrue'>确认密码</button>
		</div>
	</div>
</template>
<script>
	import APIS from '@/utils/apis'
	let vm;
	export default{
		data(){
			return{
				oldPaw:'',
				newPaw:'',
				againPaw:'',
				diffShow:false,
				btnShow:false
			}
		},
		mounted(){
			vm = this;
		},
		methods:{
			showBtn(){
				//控制确认按钮
				if(vm.againPaw == vm.newPaw && vm.newPaw != '' && vm.oldPaw != '' ){
				 	vm.btnShow = true
				}else{
					vm.btnShow = false
				}
				//提示密码是否一致 
				if(vm.againPaw == vm.newPaw){
					vm.diffShow = false
				}else if(vm.againPaw != ''){
					vm.diffShow = true
				}
			},
			//确认密码
			changeTrue(){
				if(vm.againPaw != vm.newPaw){
					vm.$layer.toast({
			            icon: 'icon-check',
			            content: '密码不一致',
			            time: 3000
		            })
					return
				}
				APIS.changePassword(vm.oldPaw,vm.newPaw)
				.then(function(res){
//					console.log(res)
					if(res.code == 0){
						vm.$layer.toast({
				            icon: 'icon-check',
				            content: '修改成功',
				            time: 3000
			            })
						setTimeout(function(){
							vm.$router.push('/login')
						},3000)
						return
					}
					vm.$layer.toast({
			            icon: 'icon-check',
			            content: res.data,
			            time: 3000
		            })
				})
				.catch(function(error){
					console.log(error)
				})
					
					
			}
		}
	}
</script>
