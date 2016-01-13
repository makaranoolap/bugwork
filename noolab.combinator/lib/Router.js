Router.configure({
    layoutTemplate: 'mainLayout',
});
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

