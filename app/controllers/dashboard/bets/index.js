import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  allBetsReversed: Ember.computed('model', function() {
    return this.get('model.allBets').toArray().reverse();
  }),

  actions: {
    deleteBet(bet) {
      bet.destroyRecord();
    },

  }
});
