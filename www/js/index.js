/*** Created by Lzs on 2017/7/14.*/
var invite = (function () {
    var g ={
       
    }
    var o = {
        render:function(){



        },
        login(){
            // $.ajax({
            //     url:'/data/login',
            //     success: res=>{
            //         console.log(res)
            //     }, 
            //     error: err=>{
            //         console.log(err)
            //     }
            // })
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