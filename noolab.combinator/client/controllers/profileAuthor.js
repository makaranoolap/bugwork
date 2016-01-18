Template.profileAuthor.helpers({
	getAuthorProfile:function(author){
		return Meteor.users.findOne({_id:author});
	}
});