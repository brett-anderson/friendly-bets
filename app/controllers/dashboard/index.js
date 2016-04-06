import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),

  actions:  {
    newBet() {
      let newBet = this.store.createRecord('bet', {
        creator: this.get("userProfile"),
        amount: 20,
        title: "Bet",
        description: "My first bet"
      });
      newBet.save();
    },

    deleteBet(bet) {
      bet.destroyRecord();
    }
  }
});
