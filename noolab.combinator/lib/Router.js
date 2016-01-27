//======================== FRONTENT PAGE =============================//
Router.configure({
    layoutTemplate: 'mainLayout',
});
Router.route('/',{
    name:'homefront'
});
Router.route('/header', {
    name: 'header'
});
Router.route('/footer', {
    name: 'footer'
});
Router.route('/login',{
    name: 'login'
});
Router.route('/register',{
    name: 'register'
});
Router.route('/usersubmit',{
    name: 'userSubmit'
});
Router.route('/admin/editprofileAuthor',{
    name: 'editprofileAuthor',
    data: function(){
        return users.findOne({_id:Meteor.userId()});
    }
});
Router.route('/admin/profileAuthor/:_id',{
    name: 'profileAuthor',
    data: function(){
        return users.findOne({_id:Meteor.userId()});
    }
});

//======================== ADMIN PAGE =============================//
Router.route('/admin',{
    name: 'dashboard'
});
Router.route('/admin/submit',{
    name: 'submit'
});
Router.route('/admin/managesubmit',{
    name: 'managesubmit'
});
Router.route('/admin/updatesubmit/:_id', {
    name: 'updatesubmit',
    data: function(){
        return post.findOne({_id: this.params._id});
    }
});
    Router.route('/admin/manageCategory',{
	name:'manageCategory'
});

Router.route('/admin/addcategory',{
	name:'addcategory'
});

Router.route('/admin/updateCategory/:_id',{
    name: 'updateCategory',
    data: function(){
        var id = this.params._id;
        var da = category.findOne({_id: id });
        return da;
    }
});
Router.route('/homeWeb/:website',{
    name:'homeWeb',
    data: function(){
        var result = post.findOne({website:this.params.website});
        console.log(this.params.website);
        return result;
    }
});
Router.route('/admin/comments/:_id', {
    name: 'comments',
    data: function(){
        return post.findOne({_id: this.params._id});
    }
});

Router.route('/admin/adduser',{
    name: 'adduser'
});
Router.route('/admin/manageuser',{
    name: 'manageuser'
});
Router.route('/admin/edituser/:_id',{
    name: 'edituser',
    data: function(){
        return users.findOne({_id: this.params._id});
    }
});