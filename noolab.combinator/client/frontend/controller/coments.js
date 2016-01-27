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
	"click .clickHere":function(e){
		$(e.currentTarget).next(".hideCom").toggle();
	}
	
});
Template.comments.helpers({
	getPostCom:function(){
		var id = this._id;
		var result= post.find({_id:id});
		return result;
		//console.log("Helll Pisey "+result);
	},

});
Template.reply.events({
	"click .reply":function(e,tlp){
		e.preventDefault();
		var id = this.commentId;
		
		var date = new Date();
		var author = Meteor.userId();
		var text = tlp.$('.reply2').val();
		alert("text : "+author);
		var obj = {
			reply:{
				authorId:author,
				text:text,
				date:value.date
			}
		}
		Meteor.call('updatePostCom',id,obj);
	}
});