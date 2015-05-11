Template.book.events({
  'click .like':function(event, template){
    var myLike = Likes.findOne({ muser:Meteor.userId(), book:template.data._id});
      if (!myLike) {
          Likes.insert({muser:Meteor.userId(),book:template.data._id});
      }
        Session.set('updated',new Date());
  }
});