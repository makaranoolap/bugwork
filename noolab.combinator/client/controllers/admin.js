Template.admin.events({
 "mouseenter .admin":function(e,tpl){
  e.preventDefault();
  //var ip = tpl.$('http://jsonip.com/', function(r){ console.log(r.ip); });
  	var currentLocation = window.location.href;
    var datestr = new Date().toString("yyyy-MM-dd HH:mm:ss");
    var timestamp = (new Date(datestr.split(".").join("-")).getTime())/1000;
  	var userId = Meteor.userId();
  	//var name = tpl.$('[name=header]').val();
  	//alert("Header here!! :"+currentLocation);
 }
});