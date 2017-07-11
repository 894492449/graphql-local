var graphql =require('graphql');

var data=require('./datas/datas');
var schema=require('./model/schema');
var tem=require('./template/index.hbs');

var root = {
	author:()=>{
		return data.authorData.author
	},
	article:()=>{
		return data.articleData.article
	}
}

var query='{author{name,address},article{title,source,like}}'

graphql.graphql(schema,query,root).then(function(res){
	var result={
		story:[],
	};
	res.data.article.forEach((e,index)=>{
		e.by = res.data.author[index].name;
		e.address=res.data.author[index].address;
		result.story.push(e);
	});
	var html=tem({
		result:result
	});
	document.getElementById('app').innerHTML = html
})

