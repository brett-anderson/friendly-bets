import Ember from 'ember';

export default Ember.Component.extend({
  newMessageText: '',

  actions: {
    newMessage() {
      if(this.get('newMessageText').trim().length > 0) {
        this.get('newMessage')(this.get('newMessageText'));
        this.set('newMessageText', '');
      }
    }
  }

});
