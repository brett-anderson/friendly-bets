import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    newMessage() {
      this.get('newMessage')(this.get('newMessageText'));
      this.set('newMessageText', '');
    }
  }

});
