Router.configure({
    layoutTemplate: 'mainLayout',
});
<<<<<<< HEAD

=======
Router.route('/submit',{
	name: 'submit'
});
Router.route('/managesubmit',{
	name: 'managesubmit'
});
Router.route('/updatesubmit/:_id', {
    name: 'updatesubmit',
    data: function(){
        return post.findOne({_id: this.params._id});
    }
});

Router.route('/',{
	name:'home'
});

Router.route('/manageCategory',{
	name:'manageCategory'
});

Router.route('/addcategory',{
	name:'addcategory'
});

Router.route('/updateCategory/:_id',{
    name: 'updateCategory',
    data: function(){
        var id = this.params._id;
        var da = category.findOne({_id: id });
        return da;
    }
});

Router.route('/manageAdvertise',{
    name:'manageAdvertise'
});

Router.route('/addadvertise',{
    name:'addadvertise'
});

Router.route('/updateAdvertise/:_id',{
    name: 'updateAdvertise',
    data: function(){
        var id = this.params._id;
        var da = advertise.findOne({_id: id });
        return da;
    }
});
>>>>>>> 3a1bd032d5f11adbf5501281de6ce5cf7bde7946

Router.route('/header', {
    name: 'header'
});
Router.route('/footer', {
    name: 'footer'
});

Router.route('/login',{
	name: 'login'
});
