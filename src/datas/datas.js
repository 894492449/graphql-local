var Mock = require('mockjs');

var authorData = Mock.mock({
	'author|20': [{
		'name': "@name",
		'address': '@city(true)'
	}]
});

var articleData = Mock.mock({
	'article|20': [{
		'title': '@title',
		'source': '@domain',
		'like': '@natural(300,5000)'
	}]
})

module.exports = {
	authorData: authorData,
	articleData: articleData
}