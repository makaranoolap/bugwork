Template.addcategory.events({
	'submit form': function(e){
		e.preventDefault();
		var title = $('#title').val();
		var parent = $('#parent').val();

		Meteor.call("addCat", title, parent, function(err){
			if(err){
				console.log(err);
			}else{
				Router.go("/admin/manageCategory");
			}
		});
	}

});
Template.addcategory.helpers({
	getCategories:function(){
		return category.find();
	}
});
Template.manageCategory.helpers({
	manageCat: function(){
		return category.find().map(function(document, index) {
            document.index = index + 1;
            return document;
        });
	},
	catName: function(cat){
		if(cat=='0')
			return;
		var result = category.findOne({_id:cat});
		return result.title;
	}
});
Template.manageCategory.events({
	'click #remove': function(e){
		e.preventDefault();
		var id = this._id;
		Meteor.call('deleteCategory', id,function(error){
			if(error){console.log("deleteCategory error"+error.reason())}
		});
	}
});

Template.updateCategory.helpers({
	checkCurrent:function(parent){
		if(parent == "0")
			return "No Parent";
		else
			return category.findOne({_id:parent}).title;
	},
	getCatname: function(){
		return category.find({});
	}
});	

Template.updateCategory.events({
	"submit form": function(e) {
		e.preventDefault();
		var id = $("#idRecord").val();
		var title = $('#title').val();
		var parent = $('#parent').val();
		var attr={
			title:title,
			parent:parent
		}
		Meteor.call('updateCat',id, attr,function(error){
			if(error){console.log("updateCat error"+error.reason())}
			else{
				Router.go('/admin/manageCategory');
			}
		});  
	}
});

