import axios from 'axios'

axios.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url:config.url,
      method:config.method,
      data:config.data,
      header: config.headers,
      success:(res)=>{ return resolve(res)},
      fail:(err)=>{return reject(err)}
    })

  })
}

// axios 拦截器
function Instance () {
  //请求拦截器
  axios.interceptors.request.use(function ( request ) {
    wx.showLoading({
      title: 'loading' // 数据请求前loading
    })
    return request
  }, function ( error ) {
    wx.hideLoading()
    // console.log(error); //请求失败
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(function ( response ) {
    //console.log('请求后')
    //console.log(response.data.data) //响应成功
    wx.hideLoading()
    if(response.statusCode !== 200){
      errorHandle(response.statusCode)
    }
    return response;
  }, function ( error ) {
    wx.hideLoading()
    console.log(42,error); //响应失败
    return Promise.reject(error);
  });
}

Instance()

/**
 *
 * @param url
 * @param params
 * @loadingShow true/false 是否显示Loading 默认true------最终把这个loadingShow放入params(暂时只有Put&Post类型用到)
 * @returns {Promise<any>}
 */

export function get (url,params) {
  return new Promise((resolve,reject) => {
    axios.get(url,params)
      .then(response => {
        resolve(response);
      },err => {
        reject(err)
      })
  })
}

export function post (url,params,loadingShow = true) {
  return new Promise((resolve,reject) => {
    params.loadingShow = loadingShow
    axios.post(url,params)
      .then(response => {
        resolve(response);
      },err => {
        reject(err)
      })
  })
}

/**
 * 微信弹窗
 */
const tip = (text)=>{
  return wx.showToast({
    title: text,
    icon: 'none',
    duration: 2000
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      console.log('请登录')
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 402://token 出错
      console.log('登录出错')
      break;
    case 403:
      tip('登录过期！')
      console.log('没有权限')
      break;
    // 404请求不存在
    case 404:
      tip('地址出错！')
      console.log('资源')
      break;
    case 500:
      //store.commit('changeNetwork', false);
      tip('网络异常！')
      console.log('网络异常!');
    //router.push({path:'refresh'})
    default:
      tip('访问出错！')
      console.log('其它错误');
  }}