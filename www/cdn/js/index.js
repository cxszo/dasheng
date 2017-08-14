var path = 'http://static.gs.youyuwo.com';

var lastInput = '';
let df = {
    jquery:'/libs/jquery/2.1.4/jquery.min.js',
    react:'/libs/react/0.10.0/react.min.js',
    vue:'/libs/vue/1.0.14/vue.js',
    'angular.js':'/libs/angular.js/1.4.6/angular.min.js'
}
function copy(){
    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function(e) {
        // console.info('Action:', e.action);
        // console.info('Text:', e.text);
        // console.info('Trigger:', e.trigger);
        $(e.trigger).addClass('copy')

        setTimeout(()=>{
            $(e.trigger).removeClass('copy')
        }, 1e3)
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        // console.error('Action:', e.action);
        // console.error('Trigger:', e.trigger);
    });
    
}
let df_render = ()=>{
    $('#ctx dd').remove();
    for(let i in df){
        $('#ctx').append(`<dd><span>${i}</span><label class="btn" data-clipboard-text="${path+df[i]}">${path+df[i]}</label></dd>`)
    }


    
}

df_render()
$('#input').on('keyup', (event)=>{
    
    
    let val = $('#input').val()
    if( !val ){
        $('body').removeClass('sel')
        return df_render();
    }
    if(!$('body').hasClass('sel')){
        $('body').addClass('sel')
        $('body').animate({scrollTop:0}, 300)
    }
    
    let nowDate = new Date
    lastInput = nowDate
    setTimeout(()=>{//.3之内没有输入 才去请求接口
        if(lastInput-nowDate == 0){
             $.ajax({
                url:`/data/cdn/list?charAt=${val}`,
                type:'get',
                success(res){
                    if(res.code == '1'){
                        let data = res.data || [];
                            

                        let html = []
                        data.map(item=>{
                            let {title, link} = item;
                            html.push(`<dd><span>${title}</span><label class="btn" data-clipboard-text="${link?path+link:''}">${link?path+link:''}</label></dd>`)
                        })
                        $('#ctx dd').remove();
                        $('#ctx').append(html.join(''))
                    }
                
                },
                error(err){
                    console.log(err)
                }
            })
        }
    }, 300)
   
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
    

    let library = $(this).text();
    $.ajax({
        url:`/data/cdn/list/${library}`,
        type:'get',
        success(res){
            if(res.code != '1'){
                return alert(res.desc);
            }
            let data = res.data || {},
                version = data.version || [],
                fresh = data.fresh || [],
                info = data.info || '';

   
            let infoHtml = []
            if(info){
                let {homepage, description, repository, keywords} = info;
                let curl = '', ctype = '';
                if(repository){
                    curl = repository.curl || '';
                    ctype = repository.ctype || '';
                }
                description = description || '卜⚔了'
                keywords = keywords || '';
                infoHtml.push(`<a href="${homepage?homepage:'javascript:;'}" target="_blank">${homepage?'官网':''}</a>&nbsp;&nbsp;&nbsp;<a href="${curl || 'javascript:;'}" target="_blank">${ctype}</a>`)
                infoHtml.push(`<p>${description}</p>`)
                infoHtml.push(`keywords: <i>${keywords.constructor === Array ?keywords.join(' '):'...'}</i>`)
            }else{
                infoHtml.push('<p>暂无相关信息</p>')
            }
            $('#libintro').html(infoHtml.join(''))
            $('.md-content h3').text(library)
            $('.versions').html(version.map(item=>{
                return `<label>${item}</label>`
            }).join(''))
            $('.versions-select-value, #libversion').text(version[0]||'');
            $('#libfiles').html(fresh.map(item=>{
                return `<li>${path+item}<span class="btn" data-clipboard-text="${path+item}">copy</span><a href="${path+item}" target="_blank">open</a></li>`
                // return `<li>http://59.110.143.111${item}</li>`
            }).join(''))

            $('.md-modal').addClass('md-show')
            $('html').addClass('hidden')
        },
        error(err){
            console.log(err)
        }
    })




})
$('.md-close').click(function(){
    $('.md-modal').removeClass('md-show')
    $('html').removeClass('hidden')
})

$('.versions-select').click(function(){
    $(this).toggleClass('expanded')
})
$('.versions-select').on('mouseleave', function(){
    $(this).removeClass('expanded')
})
$('.versions').delegate('label', 'click', function(){
    let library = $('.md-content h3').text(),
        version = $(this).text();

    $('.versions-select-value, #libversion').text(version);
    
    $.ajax({
        url:`/data/cdn/list/${library}/${version}`,
        type:'get',
        success(res){
            if(res.code != '1'){
                return alert(res.desc)
            }
            let js = res.data || []
            $('#libfiles').html(js.map(item=>{
                return `<li>${path+item} <span class="btn" data-clipboard-text="${path+item}">copy</span><a href="${path+item}" target="_blank">open</a></li>`
                // return `<li>http://59.110.143.111${item}</li>`
            }).join(''))
        },
        error(){

        }
    })
})


$('#libfiles').delegate('span', 'click', function(){
    $(this).addClass('Copeid')
    setTimeout(()=>{
        $(this).removeClass('Copeid')
    }, 2500)
})
copy();



	