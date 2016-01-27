Meteor.methods({
 insertSubmit: function(obj) {
    product.insert(obj);
   },
   UpdateSubmit: function(id,obj) {
    return product.update({_id:id},{$set:obj});
   }
})