Template.submit.events({
	'submit form':function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var author = "Foung";//Meteor.userId();
		var title = $('#title').val();
		var url = $('#url').val();
		var text = $('#text').val();
		var category =$('#category').val();
		var date = timestamp;
		var obj = {
			title:title,
			url:url,
			text:text,
			author:author,
			category:category,
			date:date
		}
		Meteor.call('insertSubmit',obj);
		Router.go("/managesubmit");
	}
});
Template.updatesubmit.events({
	'click #btnUpdate': function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var date = timestamp;
		var author = "Foung";//Meteor.userId();
		var title =$('#title').val();
		var url =$('#url').val();
		var text =$('#text').val();//CKEDITOR.instances.editor1.getData();
		var category =$('#category').val();
			var obj={
				title:title,
				url:url,
				text:text,
				date:date,
				author:author,
				category:category
			}
			post.update(this._id,obj);
		}
});
Template.updatesubmit.helpers({
	getCat:function(id){
		return category.findOne({_id:id}).title;
	},
	getCategory:function(){
		return category.find();
	}
});
Template.managesubmit.events({
'click #remove':function(){
		var id = this._id;
		return post.remove({_id:id});
	}
});
Template.managesubmit.helpers({
	managesubmit:function(){
		return post.find();
	},
	getCategory:function(){
		var id = this.category;
		return category.findOne({_id:id}).title;
	}
});
Template.home.helpers({
	getPost:function(){
		return post.find();
	},
	getCategory:function(){
		var id = this.category;
		return category.findOne({_id:id}).title;
	}
});
Template.submit.helpers({
	getCategory:function(){
		return category.find();
	}
});