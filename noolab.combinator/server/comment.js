Meteor.methods({
	updatePost: function(id,object) {
		post.update({_id:id},{$addToSet: object});
	},
	updatePostCom: function(id,obj) {
		post.update({_id:id},{$set:{comments:obj}});
	}
});