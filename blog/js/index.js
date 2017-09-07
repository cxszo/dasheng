var blog = (function(){
	var o = {
		render:function(){

		},
		bind:function(){
			//点击列表进入详情
			$('.blog-list ul li').click(function(){
				location.href='detail.html'
			})
		},
		init:function(){
			o.bind();
		}
	}
	return o;
})()
blog.init();