Meteor.methods({
	editprofileAuthor:function(id,username,about,hobbies,skills,avatar){
		var attr = {
			profile:{
				username:username,
				about:about,
				hobbies:hobbies,
				skills:skills,
				avatar:avatar
			}
		}
		return Meteor.users.update({_id:id},{$set:attr});
	}
});