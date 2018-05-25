import axios from 'axios'
import qs from 'qs'
import 'vue-layer-mobile/need/layer.css' //弹出框
import layer from 'vue-layer-mobile'
import { getToken, removeToken,getDomain } from '@/utils/auth'

let statuc = 0;
export function getStatuc() {
    return statuc;
}
export function setStatuc(val) {
    statuc = val;
}
// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 15000 // 请求超时时间
})

// respone拦截器
service.interceptors.request.use(config => {
    config.headers['X-Token'] = getToken();
    config.data = qs.stringify(config.data);
    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

//判断是否登入
service.interceptors.response.use(
    response => {
       
        const res = response.data;
        // if (response.config.url === '/user/status/login') {
        //     return response.data
        // }

        if (res.code === 100000) {
            if (statuc == 0){
            statuc++;   
            layer.dialog({
                title: ['警告', 'background:#AF282D;color:white;'],
                content: '你还未登录或者重新登录',
                btn: ['确定']
            }).then(function (res) {
                if(res == 0) {
                	//判断cookie中是否存在domain
                	let comDomain = getDomain()
	               	if(comDomain){
	               			window.location.href = comDomain
	               	}else{
	               		//去登录
	               		window.location.href = "/h5/#/login"
	               	}
                }
           })
          } 
        } else if(res.code === 100001) {
            if (statuc == 0) {
            statuc++;    
            layer.dialog({
                title: ['警告', 'background:#AF282D;color:white;'],
                content: '登入超时，请重新登入',
                btn: ['确定']
            }).then(function (res) {
                if (res == 0) {
                    let comDomain = getDomain()
	               	if(comDomain){
	               			window.location.href = comDomain
	               	}else{
	               		//去登录
	               		window.location.href = "/h5/#/login"
	               	}
                }
            })
           }
        } else if (res.code === 100002){
            if (statuc == 0) {
            statuc++;  
            layer.dialog({
                title: ['警告', 'background:#AF282D;color:white;'],
                content: '抱歉，您无权操作',
                btn: ['确定']
            }).then(function (res) {
                if (res == 0) {
                    let comDomain = getDomain()
	               	if(comDomain){
	               			window.location.href =comDomain
	               	}else{
	               		//去登录
	               		window.location.href = "/h5/#/login"
	               	}
                }
            })
          }      
        }else{
            return response.data
        }
        return Promise.reject('error');
    },
    error => {
        console.log('err' + error)// for debug
        layer.toast({
            icon: '',
            content: error.message,
            time: 2000
        })
        return Promise.reject(error)
    }
)

export default service