Template.header.events({
    "click #pro":function(e){
        e.preventDefault();
        var user = Meteor.userId();
        Router.go("/admin/profileAuthor/"+user);
    }
});
Template.homefront.helpers({
    getAllPost: function() {
        return post.find().map(function(document, index) {
            document.index = index + 1;
            return document;
        });
    },
	getFavorite:function(){
		//var id = Session.get("getProId");
		var id = this._id;
		return favorite.find({proId:id}).count();
	},
     getAuthorname:function(author){
        console.log("AUTHOR="+author);
        var result = Meteor.users.findOne({_id:author});
        return result.profile.username;
    },
    'createdOn': function() {
        return new Date();
    },
    getCategory:function(){
        var id = this.category;
        return category.findOne({_id:id}).title;
    }
});

Template.homefront.events({
	'click #title':function(e){
		e.preventDefault();
		var id = this._id;	
	},
	'click .addlike':function(e){
		e.preventDefault();
        var id=this._id;
		console.log('id'+Session.get('userId'));
             if(Session.get('userId')){
                 //alert();
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj,function(error){
                 	if(error){console,log("Add like error"+error.reason())}
                 	else{
                 		$('#like_'+id).addClass('hidden');
        				$('#unlike_'+id).removeClass('hidden');
                 	}
                 });
            }
            else{
            	var newId=Meteor.userId();
                Session.setPersistent('userId',newId);
                 //var ses=Session.get('userId');
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 //alert('Product successfully added to favorite!');
            }
	},
	'click .addunlike':function(e){
		e.preventDefault();
		var id=this._id;
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        $('#unlike_'+id).addClass('hidden');
        $('#like_'+id).removeClass('hidden');
	}
});
Template.homeWeb.helpers({
    getAllWEbsite:function(){
        var web = this.website;
        console.log("MY WEBSITE IS "+web);
        return post.find({website:web});
    },
    getFavorite:function(){
        //var id = Session.get("getProId");
        var id = this._id;
        return favorite.find({proId:id}).count();
    },
     getAuthorname:function(author){
        console.log("AUTHOR="+author);
        var result = Meteor.users.findOne({_id:author});
        return result.profile.firstname+" "+result.profile.lastname;
    }
});

Template.homeWeb.events({
    'click #title':function(e){
        e.preventDefault();
        var id = this._id;  
    },
    'click .addlike':function(e){
        e.preventDefault();
        var id=this._id;
        //Session.set("getProId",id);
        //var userId = Meteor.userId();
        console.log('id'+Session.get('userId'));
             if(Session.get('userId')){
                 //alert();
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj,function(error){
                    if(error){console,log("Add like error"+error.reason())}
                    else{
                        $('#like_'+id).addClass('hidden');
                        $('#unlike_'+id).removeClass('hidden');
                    }
                 });
            }
            else{
                var newId=Meteor.userId();
                Session.setPersistent('userId',newId);
                 //var ses=Session.get('userId');
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 //alert('Product successfully added to favorite!');
            }
    },
    'click .addunlike':function(e){
        e.preventDefault();
        var id=this._id;
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        $('#unlike_'+id).addClass('hidden');
        $('#like_'+id).removeClass('hidden');
    }
});

