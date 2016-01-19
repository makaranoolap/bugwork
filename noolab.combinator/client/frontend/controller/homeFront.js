Template.homefront.helpers({
	getAllPost:function(){
		return post.find();
	}
});

Template.homefront.events({
	'click #title':function(e){
		e.preventDefault();
		var id = this._id;	
	},
	'click #like':function(e){
		e.preventDefault();

        var id=this._id;
		var userId = Meteor.userId();
		console.log('id'+Session.get('userId'));
             if(Session.get('userId')){
                 //alert();
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                  alert('Product successfully append to favorite!');
            }
            else{
            	var newId=Random.id();
                Session.setPersistent('userId',newId);
                 //var ses=Session.get('userId');
                 
                 var obj={
                    proId:id,
                    userId:Session.get('userId')
                 }

                 Meteor.call('insertFavorite',obj);
                 //alert('Product successfully added to favorite!');
            }
        $('#like').addClass('hidden');
        $('#unlike').removeClass('hidden');
	},
	'click #unlike':function(e){
		e.preventDefault();
		 var id=this._id;
        alert(id);
        var obj=favorite.findOne({proId:id});
        //alert(obj);
        favorite.remove(obj._id);
        $('#unlike').addClass('hidden');
          $('#like').removeClass('hidden');
	}
});