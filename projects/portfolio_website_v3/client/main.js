


// EVENTS//

Template.home.events({
  'click .js-first-time':function(event){
    document.getElementById("first-time-user").style.display = "block";
  },
  'click #js-close':function(event){
    document.getElementById("first-time-user").style.display = "none";
  }
})