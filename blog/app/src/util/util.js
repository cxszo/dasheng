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
	put(url,data,successCallback,failCallback){
		let options={};
		options.headers={
			'Content-type':'application/x-www-form-urlencoded'
		}
		let _data = $.param(data);
		console.log(_data);
		options.body=_data;
		options.method='PUT';
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
	delete(url,data,successCallback,failCallback){
		let options={};
		options.headers={
			'Content-type':'application/x-www-form-urlencoded'
		}
		let _data = $.param(data);
		console.log(_data);
		options.body=_data;
		options.method='DELETE';
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
	getPara(name, url) {
		var para = (typeof url == 'undefined') ? window.location.search : url;
		para = para.split('?');
		para = (typeof para[1] == 'undefined') ? para[0] : para[1];
		para = para.split('&');
		for (var i = 0; para[i]; i++) {
			para[i] = para[i].split('='); 
			if (para[i][0] == name) {
				try { // 防止FF等decodeURIComponent异常
					return para[i][1]
				} catch (e) {
				}
			}
		}
		return '';
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
			failCallback(this.statusText);
		  }
		};
	},
	ajaxPut(url,data,successCallback,failCallback){
		var client = new XMLHttpRequest();
		client.open("PUT", url);
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
			failCallback(this.statusText);
		  }
		};
	},
	isLogin(params){
		let accessToken = localStorage.getItem('accessToken') || ''; 
		if(accessToken){
			return Object.assign({},params,{accessToken})
		}else{
			return false
		}
		
	},
	burl:'http://data.9188.group'
	
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
