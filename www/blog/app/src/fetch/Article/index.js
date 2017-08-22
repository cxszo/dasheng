
//文章详情
export let article =(callback)=>{
    let data = {
    	name:'liuzhishan'
    }
    var client = new XMLHttpRequest();
    client.open("GET", "/article/index.js");
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        callback(this.response)
      } else {
        reject(new Error(this.statusText));
      }
    };

}