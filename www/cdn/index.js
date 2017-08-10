let df = {
    jquery:'http://static.gs.youyuwo.com/libs/jquery/2.1.4/jquery.min.js',
    react:'http://static.gs.youyuwo.com/libs/react/0.10.0/react.min.js',
    vue:'http://static.gs.youyuwo.com/libs/vue/1.0.14/vue.js',
    'angular.js':'http://static.gs.youyuwo.com/libs/angular.js/1.4.6/angular.min.js'
}

let df_render = ()=>{
    $('#ctx dd').remove();
    for(let i in df){
        $('#ctx').append(`<dd><span>${i}</span><label>${df[i]}</label></dd>`)
    }
}
df_render()

$('#input').on('keyup', ()=>{
    let val = $('#input').val()
    if( !val ){
        $('body').removeClass('sel')
        df_render()
    }else{
        if(!$('body').hasClass('sel')){
            $('body').addClass('sel')
            $('body').animate({scrollTop:0}, 300)
        }
    }

    $.ajax({
        url:`/data/cdn/list?charAt=${val}`,
        type:'get',
        success(res){
            if(res.code == '1'){
                let data = res.data || [];

                let html = []
                data.map(item=>{
                    html.push(`<dd><span>${item}</span><label>https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js</label></dd>`)
                })
                $('#ctx dd').remove();
                $('#ctx').append(html.join(''))
            }
           
        },
        error(err){
            console.log(err)
        }
    })
})



$('.wrapper').delegate('dd label', 'mouseover', function(){
    var text = this;
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        
    }
})

$('.wrapper').delegate('dd span', 'click', function(){
    var text = this;
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    } else {
        
    }
})
//  md-show



