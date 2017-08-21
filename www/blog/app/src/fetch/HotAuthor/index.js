
//热门原创作者
export let hotauthor = (callback)=>{
    let data = {
    	name:'liuzhishan'
    }
    var client = new XMLHttpRequest();
    client.open("GET", "/HotAuthor/hotauthor1.js");
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
        console.log(new Error(this.statusText));
      }
    };
}