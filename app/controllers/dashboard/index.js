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
        description: "My first bet",
        timestamp: Date.now()
      });
      newBet.save();
    },

    newMessage(messageText) {
      let newMessage = this.store.createRecord('message', {
        sender: this.get('userProfile'),
        previousSenderID: this.get('model.messages.lastObject.sender.user_id'),
        text: messageText,
        timestamp: Date.now()
      });
      newMessage.save().then( () => this.set('newMessageText', ''));
    },

    deleteBet(bet) {
      bet.destroyRecord();
    }
  }
});
