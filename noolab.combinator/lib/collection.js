//products = new Meteor.Collection('products');// collection products
fullpath="/public/upload";


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
    stores: [new FS.Store.FileSystem("images", {path:base_path+"/uploads"})]
});

//attribute = new Mongo.Collection('attribute');
users = Meteor.users;

post = new Mongo.Collection('post');

category = new Mongo.Collection('category');
advertise = new Mongo.Collection('advertise');
<<<<<<< HEAD
comments = new Mongo.Collection('comments');
=======
favorite = new Mongo.Collection('favorite');
>>>>>>> a9f27f74035a3aeae7520f63b7afc3aead181e2a


