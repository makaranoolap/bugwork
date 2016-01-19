Template.comments.events({
	"click #send": function(e,tlp){
		e.preventDefault();
		var id = this._id;
		var date = new Date();
		var author = Meteor.userId();
		var text = tlp.$('#comment').val();
		var commentId = Random.id();
		alert('Hello: '+id);

		var object={
			comments:
				{commentId,authorId:author,text:text,date}
		}
		Meteor.call('updatePost',id,object);
		//post.update(this._id,object);
		
	},
	"click .clickHere":function(e){
		$(e.currentTarget).next(".hideCom").toggle();
		
	},
	"click #reply":function(e){
		alert();
		e.preventDefault();
		var id = $("#comId").val();
		//alert("id : "+id);
		var date = new Date();
		var author = Meteor.userId();
		var text = $('#comtext').val();
		var comId = this.commentId;
		//var comment = Random.id();
		alert(comId);
		var reply={
			author:author,
			text:text,
			date:date
			//Meteor.call('updatePostCom',id,obj);
		}
		var arr=[];
		arr.push(reply);
		var comments=post.findOne({_id:id}).comments;
		for(var i=0;i<comments.length;i++){
			if(comments[i].commentId==comId){

				var re=comments[i].reply;
				if(re){
					for(var j=0;j<re.length;j++){
						arr.push(re[i]);
					}
				}
				
				comments[i]={
					commentId:comments[i].commentId,
					author:comments[i].author,
					text:comments[i].text,
					reply:arr,
					date:date
				}
				
			}
		}
		Meteor.call('updatePostCom',id,comments);
		
	}
});
Template.comments.helpers({
	getPostCom:function(){
		var id = this._id;
		var result= post.find({_id:id});
		return result;
		//console.log("Helll Pisey "+result);
	},
	// checkparrent:function(comment){
	// 	var arr = [];
	// 	for(var i=0; i<comment.length;i++){
	// 		if(comment[i].parent == 0){
	// 			arr.push(comment[i]);
	// 		}
	// 	}
	// 	return arr;
	// }
	getCommets:function(){

	}
});