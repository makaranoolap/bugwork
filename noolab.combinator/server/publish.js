Meteor.publish('post', function (){ 
  return post.find({})
});