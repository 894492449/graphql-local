var graphql = require('graphql')

var schema = graphql.buildSchema(`
	type Message{
		title:String,
		source:String,
		like:Int
	},
	type Person{
		name:String,
		address:String
	},
	type Item{
		author:[Person],
		article:[Message]
	}
	type Query{
		item:Item
	}
`)

module.exports = schema