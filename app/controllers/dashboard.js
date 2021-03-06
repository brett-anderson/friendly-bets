import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),

  actions:  {

    newMessage(messageText) {
      let userID = this.get('userProfile.user_id');
      let senderID = this.get('model.messages.lastObject.senderID');
      let givenName = this.get('userProfile.given_name');
      let name = this.get('userProfile.name');
      let email = this.get('userProfile.email');
      let chatName = givenName || name || email;
      let newMessage = this.store.createRecord('message', {
        senderName: chatName,
        senderPicture: this.get('userProfile.picture'),
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
