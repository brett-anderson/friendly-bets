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
      let userID = this.get('userProfile.userID');
      let senderID = this.get('model.messages.lastObject.senderID');
      let newMessage = this.store.createRecord('message', {
        senderName: this.get('chatName'),
        senderID: userID,
        showProfile:  userID !== senderID,
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
