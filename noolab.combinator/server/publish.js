Meteor.publish('users', function (){ 
  return users.find({});
});

Meteor.publish('product', function (){ 
  return product.find({})
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


Meteor.publish('favorite', function (){ 
  return favorite.find({});
});
Meteor.publish('tracking', function (){ 
  return tracking.find({});
});


Meteor.publish('comments', function (){ 
  return comments.find({});
});
Meteor.publish('favorite', function (){ 
  return favorite.find({});
});
Meteor.publish('post', function (){ 
  return post.find({});
});
Meteor.publish(null, function (){ 
  return Meteor.roles.find({});
});
