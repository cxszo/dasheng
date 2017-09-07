/*** Created by Lzs on 2017/7/14.*/
var invite = (function () {
    var g ={}
    var o = {
        render:function(){

        },
        login(){
            //获取用户的信息
            if(!localStorage.accessToken){
                return $('.count').show();
            }
            $.ajax({
                url:'http://data.9188.group/user/userinfo',
                type:'get',
                headers:{
                    'x-access-token': localStorage.accessToken
                },
                success: res=>{
                    if(res.code == '1'){
                        let data = res.data || {};
                        let {callphone, headimg, username} = data;
                        $('.count2').show().html(`<img src="${headimg}"/><span>${username}</span>`);
                        $('.count').hide(); 
                    }else{
                        $('.count').show();
                    }
                }, 
                error: err=>{
                    $('.count').show();
                }
            })
        },
        bind:function(){
            $('#toggle').click(function(){
                if($(this).hasClass('i')){
                    $('.about,.mask').show()
                    
                }else{
                    setTimeout(()=>{
                        
                        $('.about,.mask').hide()
                    }, 500)
                }
                $(this).toggleClass('i')
                $('.about,.mask').toggleClass('hide')
            })
            //点击头像显示退出层
            $('.count2').click(function(){
                $('.count3').toggle()
            })
             //点击退出清除登录信息
            $('.count3 ul li:last-child').click(function(event){
                event.preventDefault();
                localStorage.removeItem('accessToken');
                location.href="/";
            })
        },
        init:function(){
            $('.about,.mask').toggleClass('hide')
            o.bind()
            this.login()
        }
    }
    return o
})()  
invite.init();