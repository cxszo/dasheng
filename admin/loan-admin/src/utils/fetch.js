import fetch from 'dva/fetch';
import { notification } from 'antd';

export function obj2params(obj) {
  var result = '';
  var item;
  for (item in obj) {
      result += '&' + item + '=' + encodeURIComponent(obj[item]);
  }
  return result?result.slice(1):result;
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}




/**
 * get请求方式
 * @param {String} url 接口地址
 */
let get = (url)=>{
  const option = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }
  return fetch(url, option)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}

/**
 * 
 * @param {String} url 
 * @param {Object} paramObj 
 */
let post = (url, paramObj)=>{
  const option = {}
  option.method = 'POST'
  option.headers = {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  option.body = obj2params(paramObj);
  return fetch(url, option)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}



export default {
  get,
  post
}



/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default function request(url, options) {
//   const defaultOptions = {
//     credentials: 'include',
//   };
//   const newOptions = { ...defaultOptions, ...options };
//   if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
//     newOptions.headers = {
//       Accept: 'application/json',
//       'Content-Type': 'application/json; charset=utf-8',
//       ...newOptions.headers,
//     };
//     newOptions.body = JSON.stringify(newOptions.body);
//   }

//   return fetch(url, newOptions)
//     .then(checkStatus)
//     .then(response => response.json())
//     .catch((error) => {
//       if (error.code) {
//         notification.error({
//           message: error.name,
//           description: error.message,
//         });
//       }
//       if ('stack' in error && 'message' in error) {
//         notification.error({
//           message: `请求错误: ${url}`,
//           description: error.message,
//         });
//       }
//       return error;
//     });
// }
