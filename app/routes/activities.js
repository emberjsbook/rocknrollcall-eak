export default Ember.Route.extend({
  model: function() {
    return this.get('store').find('activity');
  }
});
