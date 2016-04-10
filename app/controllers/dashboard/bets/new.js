import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),
  actions: {
    saveBet(bet) {
      bet.setProperties({
        creator: this.get("userProfile"),
        takers: [],
        user_id: this.get('userProfile.user_id'),
        timestamp: new Date()
      });
      bet.save().then( () => this.transitionToRoute('dashboard.bets') );
    }
  }

});
