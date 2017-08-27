let Util={
	timeout(ms,promise){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{reject('超时')},ms)
			promise.then(resolve,reject)
		})
	},
	post(url,data,successCallback,failCallback){
		let options={};
		options.headers={
			'Content-type':'application/x-www-form-urlencoded'
		}
		let _data = $.param(data);
		console.log(_data);
		options.body=_data;
		options.method='POST';
		this.timeout(3e3,fetch(url,options)).then(res=>{
			if(res.ok){
				return res.text();
			}else{
				failCallback(res);
			}
		}).then(resText=>{
		   return successCallback(JSON.parse(resText));
		}).catch(err=>{
			failCallback(err);
		})
	},
	ajaxGet(url,successCallback,failCallback){
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();
	
		function handler() {
		  if (this.readyState !== 4) {
				return;
		  }
		  if (this.status === 200) {
				successCallback(this.response);
		  } else {
			// console.log(new Error(this.statusText));
				failCallback(this.statusText);
		  }
		};
	},
	ajaxPost(url,data,successCallback,failCallback){
		var client = new XMLHttpRequest();
		client.open("POST", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
		client.send();
	
		function handler() {
		  if (this.readyState !== 4) {
			return;
		  }
		  if (this.status === 200) {
			successCallback(this.response);
		  } else {
			// console.log(new Error(this.statusText));
			failCallback(this.statusText);
		  }
		};
	},
	isLogin(param,fn){
		let obj;
		Cookie.getCookie('accessToken',token=>{
			Cookie.getCookie('appId',appId=>{
				let pa={accessToken:token,appId:appId};
				obj=Object.assign({},param,pa);
				if(typeof fn==='function'){
					fn(obj);
				}
			})
		})
		if(typeof fn!=='function') return obj
	}
}
let Cookie = {
	getCookie:function(objName,fn){
		var arrStr = document.cookie.split("; ");
		 for (var i = 0; i < arrStr.length; i++){
			 var temp = arrStr[i].split("="); 
			 if (temp[0] == objName){
				 if(typeof fn==='function'){
					return fn(unescape(temp[1]))
				 }else{
					  return unescape(temp[1]);
				 }
			 }
		 }
		 return fn(false) 
	},
	setCookie:function(objName, objValue, objHours){
		var str = objName + "=" + escape(objValue);
		 if (objHours > 0) {
		var date = this.d();
	    var ms = objHours * 3600 * 1000; date.setTime(date.getTime() + ms);
		 str += "; expires=" + date.toGMTString(); 
		} 
		document.cookie = str+';path=/';
	},
	delCookie:function(name){
		var date = new Date();
		 date.setTime(date.getTime() - 10000);
		  document.cookie = name + "=a; expires=" + date.toGMTString()+';path=/';
	}
}
export {Util,Cookie};
