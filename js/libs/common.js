FastClick.attach(document.body);  

var Loan = {};


Loan.channel = {
		addHead: function (tag) { 
			tag && $('header h1').text('房贷');
			$('header').show()
	        $('.pdnav').css('top', '3rem')
	        $('.swiper-container').css('padding-top', '5.6rem')
	        
	      //获取当前城市名字
			var cityName = ''
			if(/android/i.test(navigator.userAgent)){
				try{
					cityName = window.HuishuakaAndroid.jsGetCityName()
				}catch (e){}
			}else{
				try{
					cityName = window.HuishuakaIOS.jsGetCityName()
				}catch (e){}
			}
			$('#cityName').html(cityName)
			$('#cityName').on('click', function(){
				try{
					if(/android/i.test(navigator.userAgent)){
						if(typeof HuishuakaAndroid.jsCallPickCity !='undefined'){
							HuishuakaAndroid.jsCallPickCity()
						}else{
							HuishuakaAndroid.callAndroidWithEnvent("SERVICE", "35", "", "", "")
						}
					}else{
						if(typeof HuishuakaIOS.jsCallPickCity != 'undefined'){
							HuishuakaIOS.jsCallPickCity()
						}else{
							HuishuakaIOS.callIOSWithEnvent("SERVICE", "35", "", "", "")
						}
					}
				}catch(e){}
			})
		}

}

Loan.util = {
		getUrl: function (name) {  
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
	        var r = window.location.search.substr(1).match(reg);  
	        if (r != null) return unescape(r[2]);  
	        return null;  
		},
		getHttp:function (name,url) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = ("?"+url.split("?")[1]).substr(1).match(reg);
			if (r != null) return unescape(r[2]);
			return null;
		},
		getPara: function (name, url) {
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
		getCookie:function(objName){var arrStr = document.cookie.split("; "); for (var i = 0; i < arrStr.length; i++) { var temp = arrStr[i].split("="); if (temp[0] == objName) return unescape(temp[1]); } },
		setCookie:function(objName, objValue, objHours){var str = objName + "=" + escape(objValue); if (objHours > 0) {var date = new Date();  var ms = objHours * 3600 * 1000; date.setTime(date.getTime() + ms); str += "; expires=" + date.toGMTString(); } document.cookie = str+';path=/';},
		delCookie:function(name){var date = new Date(); date.setTime(date.getTime() - 10000); document.cookie = name + "=a; expires=" + date.toGMTString()+';path=/';},
}

Loan.position = {
		ip: function(fn){
			$.ajax({
				url : "http://webapi.amap.com/maps/ipLocation?v=1.3&key=bda6a03bbd0597b10bb7d1bfa9dda7b1",
				dataType : "jsonp",
				success : function(data){
					console.info(data);
					if(typeof data == 'object'){
						var lng_lat = [data.center[0], data.center[1]]
						Loan.position.getCode(lng_lat, fn)
					}else{
						typeof fn == 'function' && fn()
					}
				},
				error: function(){
					typeof fn == 'function' && fn()
				}
			});
			
		},
		gps: function(fn){
			var map, geolocation;
			//加载地图，调用浏览器定位服务
			map = new AMap.Map('container', {
				resizeEnable: true
			});
			map.plugin('AMap.Geolocation', function() {
				geolocation = new AMap.Geolocation({
                    showCircle: false, //不显示定位结果的圆
                    showMarker: false, //不显示定位结果的标记
                    showButton: false, //不显示组件的定位按钮
                    noIpLocate:0,//可以使用ip定位
                    timeout: 5000,//浏览器定位超时时间5s
                    enableHighAccuracy:true,
                    zoomToAccuracy: true
				});
				map.addControl(geolocation);
				geolocation.getCurrentPosition(function (status,result) {
                    if(status == 'complete') {
                        var str=[];
                        str.push(result.position.lng);
                        str.push(result.position.lat);
                        Loan.position.getCode(str,fn)
                    } else if(status == 'error') {
						// 原本是gps获取不到 用ip定位 现在写死为安徽 因为兼容东方金融
						/*Loan.util.setCookie("dk_adcode","340100",48)
						typeof fn == 'function' && fn('340100')*/
						 geolocation.getCityInfo(function(aa, result){
						 gpsCur = result.center
						 Loan.position.getCode(gpsCur,fn)
						 })
                    }
                });
			});
		},
		getCode: function (lnglatXY, fn) {
			var geocoder = new AMap.Geocoder({
				radius: 1000,
				extensions: "all"
			});
			geocoder.getAddress(lnglatXY, function (status, result) {
				if (status === 'complete' && result.info === 'OK') {
					var code =  result.regeocode.addressComponent.adcode; //返回地址描述
					var _code = code.substr(0,4)+'00'
					/*localStorage.setItem("dk_adcode",_code)*/
					Loan.util.setCookie("dk_adcode",_code,48)
					typeof fn == 'function' && fn(_code)
				}
			});
		}
}