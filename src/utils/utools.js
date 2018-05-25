// import $ from 'jquery'

//获取股票的接口
export function getStock(t1,k,suc){
    $.ajax({
       type: "get",
        url: "http://suggest3.sinajs.cn/suggest/type=&key="+k+"&name=suggestdata_" + t1,
       data: {},
       cache: true,//不读缓存
       dataType: 'script',
       beforeSend: function (XMLHttpRequest) {
         //ShowLoading();
       },
       success: function (data, textStatus) {
        suc(data);
       },
       complete: function (XMLHttpRequest, textStatus) {
        //HideLoading();
       },
       error: function () {
        //请求出错处理
       }
   });
}
//获取买入，卖出的接口
export function getBuyAndSale(stockCode,suc){
    $.ajax({
        type: "get",
        url: 'http://hq.sinajs.cn/list=' + stockCode + '#rnd=' + Math.random(),
        data: {},
        cache: true,//不读缓存
        dataType: 'script',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function () {
            //请求出错处理
        }
    });
}
//获取自选详情股票的当前内容分析
export function getStockDetails(stockCode,suc) {
    let timestamp = (new Date()).valueOf();
    $.ajax({
        type: "get",
        url: 'http://hq.sinajs.cn/etag.php?_=' + timestamp + '&list=' + stockCode,
        data: {},
        cache: true,//不读缓存
        dataType: 'script',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function () {
            //请求出错处理
        }
    });
}
//获取分时的数据
export function getimeChart(stockCode,suc) {
    let timestamp = (new Date()).valueOf();
    $.ajax({
        type: "get",
        url: 'https://gupiao.baidu.com/api/stocks/stocktimeline?from=pc&os_ver=1&cuid=xxx&vv=100&format=json&stock_code=' + stockCode + '&timestamp=' + timestamp,
        data: {},
        async: false,//不读缓存
        dataType: 'jsonp',
        jsonp: 'callback',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function (err) {
            //请求出错处理
            console.log(err);
        }
    });
}
//获取日K线图的数据
export function getDayChart(stockCode, suc) {
    let timestamp = (new Date()).valueOf();
    $.ajax({
        type: "get",
        url: 'https://gupiao.baidu.com/api/stocks/stockdaybar?from=pc&os_ver=1&cuid=xxx&vv=100&format=json&stock_code=' + stockCode +'&step=3&start=&count=160&fq_type=no&timestamp=' + timestamp,
        data: {},
        async: false,//不读缓存
        dataType: 'jsonp',
        jsonp: 'callback',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function (err) {
            //请求出错处理
            console.log(err);      
        }
    });
}
//获取周K线图的数据
export function getWeekChart(stockCode, suc) {
    let timestamp = (new Date()).valueOf();
    $.ajax({
        type: "get",
        url: 'https://gupiao.baidu.com/api/stocks/stockweekbar?from=pc&os_ver=1&cuid=xxx&vv=100&format=json&stock_code=' + stockCode + '&step=3&start=&count=160&fq_type=no&timestamp=' + timestamp,
        data: {},
        async: false,//不读缓存
        dataType: 'jsonp',
        jsonp: 'callback',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function (err) {
            //请求出错处理
            console.log(err);
        }
    });
}
//获取月K线图的数据
export function getMonthChart(stockCode, suc) {
    let timestamp = (new Date()).valueOf();
    $.ajax({
        type: "get",
        url: 'https://gupiao.baidu.com/api/stocks/stockmonthbar?from=pc&os_ver=1&cuid=xxx&vv=100&format=json&stock_code=' + stockCode + '&step=3&start=&count=160&fq_type=no&timestamp=' + timestamp,
        data: {},
        async: false,//不读缓存
        dataType: 'jsonp',
        jsonp: 'callback',
        beforeSend: function (XMLHttpRequest) {
            //ShowLoading();
        },
        success: function (data, textStatus) {
            suc(data);
        },
        complete: function (XMLHttpRequest, textStatus) {
            //HideLoading();
        },
        error: function (err) {
            //请求出错处理
            console.log(err);
        }
    });
}