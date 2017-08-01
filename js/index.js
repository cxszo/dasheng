/*** Created by Lzs on 2017/7/14.*/
var invite = (function () {
    var g ={
       
    }
    var o = {
        render:function(){
        },
        bind:function(){
            $('#toggle').click(function(){
                $(this).toggleClass('i')
                $('.about,.mask').toggleClass('hide')
            })
        },
        init:function(){
            o.bind()
         }
    }
    return {o:o,g:g}
})()  
invite.o.init();