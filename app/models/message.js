import DS from 'ember-data';

export default DS.Model.extend({
  senderName: DS.attr('string'),
  senderPicture: DS.attr('string'),
  showProfile: DS.attr('boolean'),
  text: DS.attr('string'),
  timestamp: DS.attr('date')

});
