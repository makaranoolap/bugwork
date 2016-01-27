// var IR_BeforeHooks = {
//     checkLogin:function(pause){
//       if (!Roles.userIsInRole(Meteor.userId(), ['admin','member'],'mygroup')) {
//           this.render('login');
//           pause();
//       }else{
//           this.next();
//       }
//     },
//     trackUser: function(pause){
//       var currentLocation = window.location.href;
//        console.log("ERROR"+currentLocation);

//     }
// };
// Router.onBeforeAction(IR_BeforeHooks.checkLogin, {
//     only: [
//         'managesubmit',
//         'manageCategory',
//         'addcategory',
//         'updateCategory',
//         'manageAdvertise',
//         'addadvertise',
//         'updateAdvertise',
//         'profileAuthor',
//         'editprofileAuthor',
//         'submit'  
//     ]
//   //except: ['admin','categories','login','register','projectlist','search','project','tage'] 
// });
// Router.before(IR_BeforeHooks.trackUser,{
//     only: [
//         'managesubmit',
//         'manageCategory',
//         'addcategory',
//         'updateCategory',
//         'manageAdvertise',
//         'addadvertise',
//         'updateAdvertise',
//         'profileAuthor',
//         'editprofileAuthor',
//         'submit'  
//     ]
// });//for member
// /*
// Router.onBeforeAction(IR_BeforeHooks.isAdminOrMember,function(error) {
//     if (error) {
//         var currentLocation = window.location.href;
//        console.log("ERROR"+currentLocation);
//     }else{
//       console.log("SUCCESS"+currentLocation);
//     }
// }, {only:routerAdminOrmember});
// */