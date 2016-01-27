Template.comments.events({
	"click #send": function(e,tlp){
		e.preventDefault();
		var id = this._id;
		var date = new Date();
		var author = Meteor.userId();
		var text = tlp.$('#comment').val();
		var commentId = Random.id();
		alert('Hello: '+id);
		Session.set('GETEID',id);
		//console.log("text helll : "+Session.get("GETEID"));
		var object={
			comments:
				{
					commentId:commentId,
					authorId:author,
					text:text,
					date:date
				}
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
		var replyid = this._id;
		var result= post.find({_id:replyid});
		return result;
		//console.log("Helll Pisey "+result);
	},

});
Template.reply.events({
	"click .reply":function(e,tlp){
		e.preventDefault();
		
		var reid = Session.get("GETEID");
		console.log("text : "+Session.get("GETEID"));
		var date = new Date();
		var comment = this.commentId;
		var author = Meteor.userId();
		var text = tlp.$('.reply2').val();
		
		var obj = {
			reply:{
				comment:comment,
				author:author,
				text:text,
				date:value.date
			}
		}
		Meteor.call('updatePostCom',reid,obj);
	}
});