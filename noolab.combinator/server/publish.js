Meteor.publish('category', function (){ 
  return category.find({});
});

Meteor.publish('advertise', function (){ 
  return advertise.find({});
});

Meteor.publish('images', function (){ 
  return images.find({});
});
