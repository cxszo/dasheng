import'./index.scss'
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
let list = {
    code:'1',
    data:[
    {
            push_article_id:'123',
            userid:'211',
            headimg:'http://upload.jianshu.io/users/upload_avatars/1767483/6321b54d19be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
            name:'正了八经的',
            cdate:'1小时前',
            title:'全力以赴之前，别说自己没机遇',
            intro:'在农业社会中，说话的技巧对大多数人来说不是刚需，沟通这件事情并不太重要。 但在现代社会，沟通能力就是一个人的核心竞争力所在。 ',
            read:23,
            comment:2,
            love:146,
            img_url:'http://upload-images.jianshu.io/upload_images/6652326-f9153b45f6f60266.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
        },
        {
            push_article_id:'123',
            userid:'211',
            headimg:'http://upload.jianshu.io/users/upload_avatars/2900435/43b9edce59d1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
            name:'小丸子的杂物集',
            cdate:'前天 15:47',
            title:'百吃不厌！淘宝上最值得购买的美食有哪些？',
            intro:'前天刷微博的时候，看到“三只松鼠开心果被检出霉菌超标”的热搜，点进去第一条微博，我一眼扫到酥也榜上有名。当时我就跟老王笑谈',
            read:23,
            comment:2,
            love:146,
            img_url:'http://upload-images.jianshu.io/upload_images/2176527-af452c5dec6f781d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
        },
        {
            push_article_id:'123',
            userid:'211',
            headimg:'http://upload.jianshu.io/users/upload_avatars/6205434/831957b5-a672-4aa2-884b-cf971a8c34d5?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
            name:'网易王三三',
            cdate:'前天 15:47',
            title:'关于如何开始自媒体写作的清单',
            intro:'亲爱的影迷朋友们，现在是【简书电影】专题福利大放送时间，免费观影活动又来啦！还有15份正版电影周边送哦。 活动电影：《极盗车神》 《极盗车神》像所有埃德加·赖特电影一样，充满.',
            read:23,
            comment:2,
            love:146,
            img_url:'http://upload-images.jianshu.io/upload_images/1359662-fc6600b06e32fa17.png?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
        },
        {
            push_article_id:'123',
            userid:'211',
            headimg:'http://upload.jianshu.io/users/upload_avatars/6126137/e83c6b36-be36-4308-8ff4-41c32fc26705?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
            name:'曹植',
            cdate:'昨天 19:50',
            title:'我感觉自己是“人血馒头”的帮凶。',
            intro:'前天刷微博的时候，看到“三只松鼠开心果被检出霉菌超标”的热搜，点进去第一条微博，我一眼扫到酥也榜上有名。当时我就跟老王笑谈',
            read:23,
            comment:2,
            love:146,
            img_url:''
        },
        {
            push_article_id:'123',
            userid:'211',
            headimg:'http://upload.jianshu.io/users/upload_avatars/6851727/225b19a0-2002-4aa5-a1d9-fda96a9fb339.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96',
            name:'小丸子的杂物集',
            cdate:'前天 15:47',
            title:'百吃不厌！淘宝上最值得购买的美食有哪些？',
            intro:'前天刷微博的时候，看到“三只松鼠开心果被检出霉菌超标”的热搜，点进去第一条微博，我一眼扫到酥也榜上有名。当时我就跟老王笑谈',
            read:23,
            comment:2,
            love:146,
            img_url:'http://upload-images.jianshu.io/upload_images/2176527-af452c5dec6f781d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/375/h/300'
        }
    ],
    desc:'success'
}
class BlogList extends React.Component{
	constructor(props) {
		super(props);
		this.state={

		}
	}
	toSrc(){
		hashHistory.push("/Detail/1234")
	}
	render(){
		return (
			<div className="blogList">
				<ul>
					{
						list.data.map((v,i)=>{
							return (
								<li key = {i} onClick={this.toSrc.bind(this)}>
									<div className = "left">
										<div className="left-content">
											<div className="author">
											      <a className="avatar" target="_blank" href="">
											        <img src={v.headimg} alt="96"/>
												  </a>      
												  <div className="name">
											        <a className="blue-link" href="">{v.name}</a>
											        <span className="time">{v.cdate}</span>
											      </div>
											</div>
											<div className="title">
												<h3>{v.title}</h3>
											</div>
											<div className="intro">
												<p>{v.intro}</p>
											</div>
											<div className="tj">
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg"/></cite><span>{v.read}</span></em>
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"/></cite><span>{v.comment}</span></em>
												<em><cite><img src="https://gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg"/></cite><span>{v.love}</span></em>		
											</div>
										</div>
									</div>
									{
										!v.img_url ? '' :
										<div className = "right">
											<div className="right-content">
												<img src={v.img_url}/>
											</div>
										</div>
									}
								</li>
							)
						})
					}
					
				</ul>
			</div>
		)
	}
}
export default BlogList