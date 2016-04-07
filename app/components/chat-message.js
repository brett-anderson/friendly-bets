import Ember from 'ember';

export default Ember.Component.extend({
  showProfile: Ember.computed( 'message', function() {
    return this.get('message.previousSenderID') !== this.get('message.sender.user_id');
  }),  
});
