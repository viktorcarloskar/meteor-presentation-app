Likes = new Mongo.Collection("likes");
Comments = new Mongo.Collection("comments");


if (Meteor.isClient) {

  Template.presentation.helpers({
    likes: function () {
      return Likes.find();
    },
    like_left: function () {
      return ((window.innerWidth - 60) * Math.random()) + 30;
    },
    like_top: function () {
      return ((window.innerHeight - 100) * Math.random()) + 50;
    }
  });
  Template.comment.helpers({
    comments: function() {
      if (window.location.pathname.indexOf("presentation") != -1) {
        return Comments.find({}, {sort: {datetime: 1}});
      }
      else {
        return Comments.find({}, {sort: {datetime: -1}});
      }
      
    }
  })

  Template.interact.events({
    'click #like-button': function () {
      // increment the counter when button is clicked
      var likeBtn = document.getElementById('like-button');
      likeBtn.classList.add('click');
      setTimeout(function() {
        likeBtn.classList.remove('click');
      }, 800);
      Likes.insert({});
    },  
    'submit form': function(event) {
      event.preventDefault();
      var date = new Date();
      var now = date.valueOf()
      var nextInsert = Session.get('timer') || now - 1;
      var isGif = (event.target.commentText.value.indexOf('.gif') > -1) || false;
      if (isGif && event.target.commentText.value.indexOf('giphy.com') == -1) {
        nextInsert = 100000000000000;
      }

      if (nextInsert < now && event.target.commentText.value.length > 1) {
        Comments.insert({comment: event.target.commentText.value, datetime: now, isGif: isGif});
        event.target.commentText.value = "";
      }

      nextInsert = now + 1000
      Session.set('timer', nextInsert)
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Likes.remove({});
    Comments.remove({});
  });
}

Router.route('/', function () {
  this.render('interact');
});
Router.route('/presentation');
