Meteor.methods({
	updatePost: function(id,object) {
 	post.update({_id:id},{$addToSet: object});
  }
});