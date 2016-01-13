Router.configure({
    layoutTemplate: 'mainLayout',
    
});

Router.route('/header', {
    name: 'header'
});
Router.route('/footer', {
    name: 'footer'
});
Router.route('/', {
    name: 'home'
});

Router.route('/login',{
	name: 'login'
});

