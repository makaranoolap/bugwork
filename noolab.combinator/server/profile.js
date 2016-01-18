Meteor.methods({
	editprofileAuthor:function(id,firstname,lastname,about,hobbies,skills){
		var attr = {
			profile:{
				firstname:firstname,
				lastname:lastname,
				about:about,
				hobbies:hobbies,
				skills:skills
			}
		}
		return Meteor.users.update({_id:id},{$set:attr});
	}
});