import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),

  userOwnsBet: Ember.computed(function() {
    return this.get('userProfile.user_id') === this.get("bet.creator.user_id");
  }),

  userIsTakingBet: Ember.computed(function() {
    let takers = this.get('bet.takers');
    if(!takers) {return false;}

    let takerIds = takers.map( taker => taker.user_id);
    let userId = this.get('userProfile.user_id');
    let found = false;
    takerIds.forEach( takerId => {
      if(takerId === userId){
        found = true;
      }
    });

    return found;

  }),

  actions: {
    deleteBet(bet) {
      if( confirm("This cannot be undone")) {
        bet.destroyRecord();
      }
    },

    placeBet(bet) {
      if(bet.get('takers')) {
        bet.get('takers').push(this.get('userProfile'));
      } else {
        bet.set('takers', [this.get('userProfile')]);
      }
      bet.save();
    }
  }
});
