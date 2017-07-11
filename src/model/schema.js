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
	type Query{
		author:[Person],
		article:[Message]
	}
`)

module.exports = schema