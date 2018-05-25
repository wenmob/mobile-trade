import request from '@/utils/request'

const APIS = {
    // 登陆
    checklogin: () => {
        return request({
            url: '/user/status/login',
            method: 'post',
            data: {}
        })
    },
    //测试登入
    testLogin: () => {
        return request({
            url: '/rest/login/token?u=001200001&&p=111&accountId=001200006',
            method: 'get',
            data: {}
        })
    },
    //
    testToken: (token) => {
        return request({
            url: '/user/login/token?token=' + token + '&templeteType=nofoot',
            method: 'get',
            data: {}
        })
    },
    //撤单的接口
    getRevokeList: () => {
        return request({
            url: '/user/revoke/list',
            method: 'get',
            data: {}
        })
    },
    //查询
    historyInfo: (dateAddBegin,dateAddEnd) => {
        return request({
            url: '/user/transaction/logsNew?dateAddBegin='+dateAddBegin+'&dateAddEnd='+dateAddEnd,
            method: 'get',
            data: {}
        })

    },
    //查询
    historyInfoDetail: (id) => {
        return request({
            url: '/user/transaction/detail?id='+id,
            method: 'get',
            data: {}
        })

    },
    //持仓公用部分
    positionCommon: () => {
        return request({
            url: '/user/transaction/',
            method: 'get',
            data: {}
        })

    },
    //点击买入的接口
    buySubmit: (stockCode,price,number) => {
        return request({
            url: '/user/entrust/buy/save',
            method: 'post',
            data: {
                stockCode: stockCode.toUpperCase(),
                price: price,
                number: number
            }
        })
    },
    saleSubmit: (stockCode,price,number) => {
        return request({
          url: '/user/entrust/sell/save',
          method: 'post',
          data: {
            stockCode: stockCode.toUpperCase(),
            price: price,
            number: number
          }
        })
    },
    //获取买入卖出的接口
    getStock:() => {
        return request({
            url: 'http://suggest3.sinajs.cn/suggest/type=&key=30&name=suggestdata_1518054727171',
            responseType: "script",
            method: 'get',
            data: {}
        })
    },
    //获取买入，卖出的接口
    getBuyAndSale: (stockCode) => {
        return request({
            url: 'http://hq.sinajs.cn/list=' + stockCode,
            responseType: "script",
            method: 'get',
            data: {}
        })
    },
    //撤单
    cancelOrder: (id) => {
        return request({
            url: '/user/revoke/done?id='+id,
            method: 'post',
            data: {}
        })
    },
    //登录
    login: (username,password) => {
        return request({
            url: '/user/login/check',
            method: 'post',
            data: {
            	username:username,
            	password:password
            }
        })
    },
     //退出
    loginout: () => {
        return request({
            url: '/user/loginout',
            method: 'get',
            data: {}
        })
    },
     //我的个人信息
    userInfo: () => {
        return request({
            url: '/user/my',
            method: 'get',
            data: {}
        })
    },
     //关于的信息
    aboutInfo: () => {
        return request({
            url: '/user/my/about',
            method: 'get',
            data: {}
        })
    },
     //修改密码
    changePassword: (pwdOld,pwdNew) => {
        return request({
            url: '/user/my/editPwd/save',
            method: 'post',
            data: { pwdOld , pwdNew }
        })
    },
    //添加自选股
    addSelfStock: (stockCode,stockName) => {
       return request({
           url: '/user/stock/self-select/add/save',
           method: 'post',
           data: { stockCode, stockName } 
       })
    },
    //获取自选股票列表
    getSelfStockList: () => {
        return request({
            url: '/user/stock/self-select/list',
            method: 'get',
            data: {}
        })
    },
    //对股票代码进行数数组排序
    setStockList: (ids, paixu) => {
        return request({
            url: '/user/stock/self-select/paixu',
            method: 'POST',
            data: {
                ids:ids.toString(),
                paixu: paixu.toString()
            }
        })
    },
    //删除自选股票的接口
    delSelfStocks: id => {
        return request({
            url: '/user/stock/self-select/del',
            method: 'POST',
            data: {
               id
            }
        })
    }

   
}

export default APIS
