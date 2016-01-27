Meteor.methods({
    regUser:function(email,username,password,rerole){
   		targetUserId = Accounts.createUser({
	    	email: email,
	    	password: password,
	    	profile:{username:username}
	   	});
	   Roles.setUserRoles(targetUserId, [rerole])
	}
});