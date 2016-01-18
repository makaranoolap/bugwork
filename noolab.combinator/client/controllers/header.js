Template.header.helpers({
	getprofile:function(){
    	var id = Meteor.userId();
    	console.log("MYUSER="+id);
    	return Meteor.users.findOne({_id:id});
    }
});