import DS from 'ember-data';

export default DS.Model.extend({
  senderName: DS.attr('string'),
  showProfile: DS.attr('boolean'),
  text: DS.attr('string'),
  timestamp: DS.attr('date'),

  chatName: Ember.computed(function() {
    let givenName = this.get('sender.given_name');
    let name = this.get('sender.name');
    let email = this.get('sender.email');
    return givenName || name || email;

  }),

});
