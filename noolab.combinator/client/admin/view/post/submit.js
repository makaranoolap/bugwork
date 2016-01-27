Template.submit.events({
	'submit form':function(e){
		e.preventDefault();
		var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
		//var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
		var author = Meteor.userId();
		var title = $('#title').val();
		alert(title);
		var url = $('#url').val();
		//var website = url.split(".com")[0] + ".com";
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		console.log("My website :"+website);
		var text = $('#text').val();
		var category =$('#category').val();
		var date = new Date();
		var obj = {
			title:title,
			url:url,
			website:website,
			text:text,
			author:author,
			category:category,
			date:date
		}
		Meteor.call('insertSubmit',obj);
		Router.go("/admin/managesubmit");
	}
});
Template.updatesubmit.events({
	'click #btnUpdate': function(e){
		e.preventDefault();
		var date = new Date();
		var author = Meteor.userId();//Meteor.userId();
		var title =$('#title').val();
		var url =$('#url').val();
		var websites = url.replace(/(http.*?\/\/)(.*?.com|.*?\w+)(\/.*)/ig, "$2");
		var website= websites.replace('www.','');
		var text =$('#text').val();//CKEDITOR.instances.editor1.getData();
		var id = this._id;
		//alert("hello"+id);
		var category =$('#category').val();
			var obj={
				title:title,
				url:url,
				website:website,
				text:text,
				author:author,
				category:category,
				date:date
			}
			Meteor.call("UpdateSubmit",id,obj,function(erro){
				if(erro){console.log(erro.reason())}
				else{
					console.log("SUCESS UPDATE");
					Router.go("/admin/managesubmit");
				}
			});
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
		return product.remove({_id:id});
	}
});
Template.managesubmit.helpers({
	managesubmit:function(){
		if (Roles.userIsInRole(Meteor.userId(), ['member'],'mygroup')) {
         	return post.find({author:Meteor.userId()}).map(function(document, index) {
	            document.index = index + 1;
	            return document;
	        });
	    }else{
	        return post.find().map(function(document, index) {
	            document.index = index + 1;
	            return document;
	        });
	    }
	},
	getCategory:function(cat){
		return category.findOne({_id:cat}).title;
	}
});
Template.submit.helpers({
	getCategory:function(){
		return category.find();
	}
});
