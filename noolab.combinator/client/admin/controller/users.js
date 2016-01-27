Template.adduser.events({
    'click #btnuser': function(e,tlp){
        e.preventDefault();
        alert("username" +username);
        var username = tlp.$('#username').val();
        var fname = tlp.$('#firstname').val();
        var lname = tlp.$('#lastname').val();
        var email = tlp.$('#email').val();
        var password = tlp.$('#password').val();
        var mySelect = tlp.$('#mySelect').val();
        // alert(mySelect);
        Meteor.call('addUser',username,fname,lname,email,password,mySelect);
        Router.go('/manageuser');
    }
});
Template.adduser.helpers({
    getRoles:function(){
        var result= Meteor.roles.find({});
        console.log("My Role :"+JSON.stringify(result));
        return result;
        console.log("MY ROLES IS "+result);

    }
});

Template.manageuser.helpers({
    getManageuser:function(){
        var a = Session.get("count");
        a++;
        return Meteor.users.find({});
        //return allUser;
    },
    userRole:function(){
        return Meteor.roles.find();
    }
});
Template.manageuser.events({
    'click #remove': function(e){
        e.preventDefault();
        var id = this._id;
        if (confirm("Are you sure you want to delete this?")) {
            Meteor.call("deleteUser",id);
            Router.go('/manageuser');
        }
    }
});

Template.edituser.events({
    'click #edituser': function(e){
        e.preventDefault();
        var id = this._id;
        var username = $('#username').val();
        var fname = $('[name=firstname]').val();
        var lname = $('[name=lastname]').val();
        var email = $('#email').val();
        // var password = $('#password').val();
        var mySelect = $('#mySelect').val();
        alert("it Working"+id+" "+username+" "+fname+" "+lname+" "+email);
        Meteor.call('edituser',id,username,fname,lname,email,function(err){
            if (err) {
                alert(err);
            }
        });
        Meteor.call('updateroles',id,mySelect);
        Router.go('/manageuser');
    }
});
Template.edituser.helpers({
    getRoles:function(){
        var result = Meteor.roles.find({});
        //console.log("My Role :"+JSON.stringify(result));
        return result;
    },
    position: function(posit){
        return posit[0];
    }
});