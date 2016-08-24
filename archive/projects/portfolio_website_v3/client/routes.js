// set up the main template the the router will use to build pages
  Router.configure({
    layoutTemplate: 'ApplicationLayout'
  });
  // specify the top level route, the page users see when they arrive at the site
  Router.route('/', function () {
    console.log("You've arrived on the landing page!");
    this.render("navbar", {to:"header"});
    this.render("home", {to:"main"});
    this.render("foot", {to:"footer"});  
  });

  Router.route('tips', function () {
    console.log("Tips page!");
    this.render("navbar", {to:"header"});
    this.render("tips", {to:"main"});
    this.render("foot", {to:"footer"});  
  });

  Router.route('blog', function () {
    console.log("Blog page!");
    this.render("navbar", {to:"header"});
    this.render("blog", {to:"main"})
    this.render("foot", {to:"footer"});  
  });

  Router.route('about', function () {
    console.log("About page!");
    this.render("navbar", {to:"header"});
    this.render("about", {to:"main"});
    this.render("foot", {to:"footer"});  
  });


// Router.route('admin/blog', function () {
//     console.log("You're in the admin page, get ready to blog!");
//     this.render("navbar", {to:"header"});
//     this.render("foot", {to:"footer"});  
//   });

