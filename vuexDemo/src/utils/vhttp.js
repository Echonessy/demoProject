/**
 * Created by Echonessy on 2019/4/23.
 */
import request from '../api/config'
import Vue from 'vue';
const debug = true;
const domain = document.domain;




export const get = (url,data,success,isOrigin) => {
  try{
    if (!url.indexOf('?') > -1) url += '?version='+Math.random();
    else url+='&version='+Math.random();
  }catch (e) {
    url += '?version='+Math.random()
  }
  return request({
    url: url,
    method: 'get',
    params: data
  }).then((response) =>{
    let res = response.data;
    success(res);
  }).catch(function (error) {

  });
};




export default Vue => {
  const obj = {
    get: get,
  };
  Vue.vhttp = obj;
  Vue.prototype.$vhttp = obj;
}
