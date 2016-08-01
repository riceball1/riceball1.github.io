// Meteor.publish("blogPosts", function () {
//     return Meteor.blog_posts.find({});
// });

Meteor.publish("userData", function () {
    return Meteor.users.find({});
});