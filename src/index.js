var graphql = require('graphql');

var data = require('./datas/datas');
var schema = require('./model/schema');
var tem = require('./template/index.hbs');

var root = {
	item: () => {
		return {
			author: () => data.authorData.author,
			article: () => data.articleData.article
		}
	}
}

var query = '{item{author{name,address},article{title,source,like}}}'


graphql.graphql(schema, query, root).then(function(res) {
	var result = {
		story: [],
	};
	res.data.item.article.forEach((e, index) => {
		e.by = res.data.item.author[index].name;
		e.address = res.data.item.author[index].address;
		result.story.push(e);
	});
	var html = tem({
		result: result
	});
	document.getElementById('app').innerHTML = html
})