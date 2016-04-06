import DS from 'ember-data';

export default DS.Model.extend({
  sender: DS.attr(),
  text: DS.attr('string'),
  timestamp: DS.attr('date')
});
