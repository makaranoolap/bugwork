Meteor.methods({
	updatePost: function(id,object) {
		post.update({_id:id},{$addToSet: object});
	},
	updatePostCom: function(reid,obj) {
		post.update({_id:reid},{$addToSet:{comments:obj}});
	}
});