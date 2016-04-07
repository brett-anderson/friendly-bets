import Ember from 'ember';

export default Ember.Component.extend({
  newMessageText: '',

  lastMessageID: Ember.computed('message.[]', function() {
    console.log(this.get("messages"));
  }),

  actions: {
    newMessage() {
      if(this.get('newMessageText').trim().length > 0) {
        this.get('newMessage')(this.get('newMessageText'));
        this.set('newMessageText', '');
      }
    }
  }

});
