
<a href='http://www.9188.group' target="_blank">`大圣网`</a>
<a href='http://blog.9188.group' target="_blank">`大圣博客`</a>

>测试accessToken
`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ium9kOWkqeWkp-WcoyIsInBhc3N3b3JkIjoibG92ZW1lIiwiaWF0IjoxNTA0MTA2NTcxLCJleHAiOjE1NjQ1ODY1NzF9.iaaV422XNemhr4kioCWGt5b0RgLKEkKCf_fTQpEeuic`

>Response Code 解析

```
{
  code:''//1 查询成功
  code:''//1024 用户未登录
  code:''//-100 接口报错
  code:''//-99 未查到 不存在
}
```

>登录信息传入方式 
- ajax请求 可以放在request headers里面 通过x-access-token参数承载 fetch请求请用下面两种方式
- get请求 xxx.com/?accessToken=xxx
- post请求 如下 
```
fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'accessToken=xxx'
})
```


    
