Meteor.publish('users', function (){ 
  return users.find({});
});

Meteor.publish('post', function (){ 
  return post.find({})
});

Meteor.publish('category', function (){ 
  return category.find({});
});

Meteor.publish('advertise', function (){ 
  return advertise.find({});
});

Meteor.publish('images', function (){ 
  return images.find({});
});
<<<<<<< HEAD
Meteor.publish('comments', function (){ 
  return comments.find({});
=======
Meteor.publish('favorite', function (){ 
  return favorite.find({});
>>>>>>> a9f27f74035a3aeae7520f63b7afc3aead181e2a
});


