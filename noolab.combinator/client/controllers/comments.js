Template.comments.events({
	"click #send": function(e,tlp){
		e.preventDefault();
		var id = this._id;
		var date = new Date();
		var author = Meteor.userId();
		var text = tlp.$('#comment').val();
		var parent = 0;
		var commentId = Random.id();
		alert('Hello: '+id);

		var object={
			comments:
				{commentId,authorId:author,parent,text:text,date}
		}
		Meteor.call('updatePost',id,object);
		//post.update(this._id,object);
		
	},
	"click #reply":function(e,tlp){
		e.preventDefault();
		var parentId = this.
	}
});
Template.comments.helpers({
	getPostCom:function(){
		var id = this._id;
		var result= post.find({_id:id});
		return result;
		//console.log("Helll Pisey "+result);
	}
});