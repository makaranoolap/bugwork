Router.configure({
    layoutTemplate: 'mainLayout',
    
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

