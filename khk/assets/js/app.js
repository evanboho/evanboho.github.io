'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('pane', { path: '/:pane_id' }, function() {
    this.route('edit', { path: 'edit' });
  });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return _.filter(FIXTURES.content, function(item) {
      return item.link;
    });
  }
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('pane', '');
  }
});

App.PaneRoute = Ember.Route.extend({
  model: function(params) {
    return App.Pane.create(_.findWhere(FIXTURES.content, { url: params.pane_id }));
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

Ember.Handlebars.helper('img-for-pane', function(paneName) {
  if (FIXTURES.imgUrls[paneName]) {
    var img = new Image()
    img.src = FIXTURES.imgUrls[paneName];
    img.onload = function() {
      $('img').fadeIn();
    }
    return new Handlebars.SafeString('<img style="display: none;" src="' + FIXTURES.imgUrls[paneName] + '"/>');
  } else if (this.content && this.content.imgAlt){
    return new Handlebars.SafeString('<div class="img-alt">' + this.content.imgAlt + '</div>');
  }
});
