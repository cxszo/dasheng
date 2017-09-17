import 'whatwg-fetch'





/*
method [POST]
*/
export function post(url, paramsObj) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
            
        },
        body: obj2params(paramsObj)
    })
    .then(checkStatus)
    .then(response=>response.json())
}

/*
method [GET]
*/
export function get(url) {
    return fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            
        }
    })
    .then(checkStatus)
    .then(response=>response.json())
}


/*
method [FORM]
*/
export function form(url, paramsObj) {
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Accept': 'application/json, text/plain, */*'
        },
        body: paramsObj
    })
    .then(checkStatus)
    .then(parseJSON)
}




function obj2params(obj) {
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
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}