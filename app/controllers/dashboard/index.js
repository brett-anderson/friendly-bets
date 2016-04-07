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
        timestamp: new Date()
      });
      newBet.save();
    },

    newMessage(messageText) {
      let newMessage = this.store.createRecord('message', {
        sender: this.get('userProfile'),
        previousSenderID: this.get('model.messages.lastObject.sender.user_id'),
        text: messageText,
        timestamp: new Date()
      });
      newMessage.save().then( () => this.set('newMessageText', ''));
    },

    deleteBet(bet) {
      bet.destroyRecord();
    }
  }
});
