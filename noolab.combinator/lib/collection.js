<<<<<<< HEAD
=======

//products = new Meteor.Collection('products');// collection products


fullpath="/public/upload";

>>>>>>> ed38abdf0a0160e96c6236f02901007a9eafeb83
if (Meteor.isServer) {
	fullpath=process.env.PWD;
	console.log('linux path:'+fullpath);
	if( typeof fullpath == 'undefined' ){
		base_path = Meteor.npmRequire('fs').realpathSync( process.cwd() + '../../' );
		console.log('window path:'+base_path);
		base_path = base_path.split('\\').join('/');
		base_path = base_path.replace(/\/\.meteor.*$/, '');
	}else{
		base_path=fullpath;
	}
}
else{
	base_path="/";
}
console.log( 'BASE PATH: '+base_path );
images = new FS.Collection("images", {
	//stores: [new FS.Store.FileSystem("images", {path:"/opt/safir/app/uploads"})]
    stores: [new FS.Store.FileSystem("images", {path:base_path+"/public/upload"})]
});

<<<<<<< HEAD
post = new Mongo.Collection('post');
=======
category = new Mongo.Collection('category');
advertise = new Mongo.Collection('advertise');
>>>>>>> ed38abdf0a0160e96c6236f02901007a9eafeb83

