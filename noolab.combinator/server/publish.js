
Meteor.publish('users', function (){ 
  return user.find({});
});
