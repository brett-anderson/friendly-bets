import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr(),
  takers: DS.attr({default: []}),
  odds: DS.attr('number', {default: 2}),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  odds: DS.attr('number'),
  expires: DS.attr('date'),
  timestamp: DS.attr('date')
});
