import axios from 'axios'
import qs from 'qs'// 序列化处理
import router from '../router/index'
import util from '@/utils/index'
// import eventBus from "@/js/EventBus";
// import store from '@/store'


var baseUrl = '';
var _baseConfig = {};

baseUrl = process.env.VUE_APP_URL;
_baseConfig = {
  ApiUrl: process.env.VUE_APP_URL,
  LogoUrl: '',
  Title: '',
  Keywords: '',
  Description: '',
};


export const ajaxUrl = baseUrl;
export const baseConfig = _baseConfig;

axios.defaults.withCredentials = true;
/**
 * 
 * @param {是否需要token} isToken 
 * @param {配置} options 
 * @param {是否需要loading} notLoading 
 */
export function request(isToken, options, notLoading) {
  return new Promise((resolve, reject) => {
    let config = {
      baseURL: ajaxUrl,
      timeout: 180 * 1000,// 15秒超时
    };
    const instance = axios.create(config); //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
    // 添加请求拦截器
    instance.interceptors.request.use((options) => {
      // !notLoading ? eventBus.$emit("Show_Loading", true) : "";
      if (isToken) {
        if (options.method === 'post') {
          options.data['token'] = localStorage.getItem("token") || '';
        }
        if (options.method === 'get') {
          options.params['token'] = localStorage.getItem("token") || '';
        }
      }

      return options
    }, (error) => {
      return Promise.reject(error)
    })
    //添加响应拦截器
    instance.interceptors.response.use(res => {
      // eventBus.$emit("Show_Loading", false);
      return res
    },
      error => {
        //1.判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        }
        return Promise.reject(error)
      }
    )
    instance(options)
      .then(response => { //then 请求成功之后进行什么操作
        //把请求到的数据发到引用请求的地方
        if (response) {
          if (response.data.errno === 1008) {
            // let selfStore = store;
            // selfStore.dispatch("common/loginOut", {});
            // eventBus.$emit("Show_LRModal");
            resolve(response.data);
            return;
          }
          resolve(response.data)
        } else {
          resolve(response)
        }
      })
      .catch(error => {
        console.log('请求异常，信息：', error)
        reject(error)
      })
  })
}
