'use strict';

var App = Ember.Application.create();

App.Router.map(function() {
  this.resource('pane', { path: '/:pane_id' }, function() {
    this.route('edit', { path: 'edit' });
  });
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return App.Pane.FIXTURES;
  }
});

App.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('pane', 'about');
  }
});

App.PaneRoute = Ember.Route.extend({
  model: function(params) {
    return App.Pane.create(_.findWhere(App.Pane.FIXTURES, { url: params.pane_id }));
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

Ember.Handlebars.helper('random-img', function(paneName) {
  if (App.Pane.imgFIXTURES[paneName]) {
    return new Handlebars.SafeString('<img src="' + App.Pane.imgFIXTURES[paneName] + '"/>');
  }
});

$(function() {
  _.each(_.values(App.Pane.imgFIXTURES), function(url) {
    new Image().src = url;
  });
})
