'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('pane', { path: '/:pane_id' }, function() {
    this.route('edit', { path: 'edit' });
  });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return App.FIXTURES;
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {}
});

App.PaneRoute = Ember.Route.extend({
  model: function(params) {
    return App.Pane.create(_.findWhere(App.FIXTURES, { url: params.pane_id }));
  }
});

App.PaneController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    edit: function() {
      if (this.get('isEditing') === true) {
        this.set('isEditing', false);
        $('#edit').text('edit');
      } else {
        this.set('isEditing', true);
        $('#edit').text('cancel');
      }
    }
  }
});

App.Pane = Ember.Object.extend({
  rawBody: function() {
    return this.get('body').replace(/\n/g, "\\n");
  }.property('body')
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input) {
  return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('random-img', function(i) {
    var urls = [
      "http://www.findingthebeingwithin.org/wp-content/uploads/2013/04/wisdom_tree_big.png",
      "http://i204.photobucket.com/albums/bb265/comprime/Druid.jpg",
      "http://shirtoid.com/wp-content/uploads/2011/04/wisdom-courage-power1.jpg",
      "http://www.sayakaganz.com/wp-content/uploads/2012/04/f-wisdom.jpg",
      "http://shirtoid.com/wp-content/uploads/2011/04/wisdom-courage-power1.jpg"
    ];
    return new Handlebars.SafeString('<img src="' + urls[i-1] + '"/>');
})
