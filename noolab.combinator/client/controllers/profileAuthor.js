Template.editprofileAuthor.events({
	'click #updateAuthor': function(event){
        event.preventDefault();
        var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
        var about = $('#about').val();
        var hobbies = $('#hobbies').val();
        var skills = $('#skills').val();
        var id = Meteor.userId();
        alert(firstname+lastname+about+hobbies+skills);
       	Meteor.call("editprofileAuthor",id,firstname,lastname,about,hobbies,skills,function(error){
       		if(error){console.log(error.reason())}
       		else{
       			console.log("UPDATE SUSCESS");
       			Router.go("/profileAuthor/"+Meteor.userId());
       		}
       	});
    }
});