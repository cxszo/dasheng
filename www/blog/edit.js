


var h = $(window).height();
	$('.blog-content > div').height(h);//三个div高度
	$('.edit-text').height(h-40);//编辑器的高
	
	//新建文章
	$('.new-article').click(function(){
		var _out=[];
		_out.push('<li><span><img src="icon/ico-book.png"></span><span><h3>文章标题</h3><p>描述描述描述描述描述描述描述描述描述描述</p></span></li>');
		$('#article-list').html(function(i, v){
			return v + _out.join('')  
		});
	});

	initEdit();

	function initEdit(){
		bindBtnComand();
	}

	//初始化
	(function (){
		var isHtml = document.getElementById('edit-text');
		if(isHtml.innerHTML == ''){
			var div= document.createElement('div');
			div.innerHTML= '请输入...';
			div.style.color = '#ccc';
			div.id = 'edit-tip';
			isHtml.appendChild(div);
			isHtml.onfocus = function(){
				document.getElementById('edit-tip').style.display = 'none'
			}
		}
	})()
	function bindBtnComand(){
		var editHeader = document.getElementById('edit-header');
		var btnConfigs = "bold|null|粗体 italic|null|斜体 strikeThrough|null|删除线 formatBlock|H1|H1 formatBlock|H2|H2 formatBlock|H3|H3 formatBlock|BLOCKQUOTE|引用 formatBlock|div|结束引用 undo|null|撤销 redo|null|重做 formatBlock|img|图片".split(" ");
		//动态生成按钮
		for(var i=0;i<btnConfigs.length;i++){
			var a = document.createElement('a');
			a.className = 'edit-btn';
			a.href = "javascript:;"
			a.id = 'edit-tool' + i;
			var img = document.createElement('img');
			a.appendChild(img);//img放入a
			editHeader.appendChild(a);//a 放入最外层可编辑的div
		}
		//给按钮绑定功能
		var btns = editHeader.getElementsByTagName('a');
		var imgs = editHeader.getElementsByTagName('img');
		for (var i = 0,btnConfig; btnConfig = btnConfigs[i];i++) {
			(function(btnConfig,btn){
				var mag = btnConfig.split('|'),lab=mag[0],value= mag[1],title= mag[2];
				imgs[i].src= "icon/"+title+".png";
				btn.title= title;
				btn.onclick = function(e){
					var aa = document.execCommand(lab,false, value);
					console.log(aa)
				}
			})(btnConfig, btns[i])
		}

    }
    
    $('.publish').click(()=>{
        console.log($('#edit-text').html())

        $.ajax({
            url:'/data/blog/edit',
            type:'post',
            data:{
                content: $('#edit-text').html()
            },
            seccess(){

            },
            error(){


            }
        })
    })