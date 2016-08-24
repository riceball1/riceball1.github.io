// setup blog posts



Meteor.startup(function(){
  if (!Meteor.users.findOne()){
    // array for customized users for startup
    var avatar_arr = ["bunny", "cat", "panda", "penguin"];
    for (var i=0;i<avatar_arr.length;i++){
      var email = avatar_arr[i]+"@test.com";
      console.log("creating a user with password 'test123' and username/ email: "+email);
      Meteor.users.insert({username:avatar_arr[i], emails:[{address:email}],services:{ password:{"bcrypt" : "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"}}});
    }
  }
});


// Meteor.startup(function(){
//   console.log("I am creating some blog posts!");
//   Meteor.blog_posts.insert({
//       "title" : "example",
//   "tags" : [
//     ""
//   ],
//   "slug" : "example",
//   "description" : "",
//   "body" : "<p class=\"commentable-section\" data-section-id=\"1\">I inserted this from the server</p>",
//   "titleBackground" : false,
//   "featuredImageWidth" : null,
//   "featuredImageHeight" : null,
//   "featuredImageName" : null,
//   "featuredImage" : null,
//   "excerpt" : "here's a blog post",
//   "mode" : "public",
//     });
//   });