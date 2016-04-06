import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr(),
  title: DS.attr('string'),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  timestamp: DS.attr('date')
});
