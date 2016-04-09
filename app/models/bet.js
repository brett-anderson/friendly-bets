import DS from 'ember-data';

export default DS.Model.extend({
  creator: DS.attr(),
  takers: DS.attr({default: []}),
  title: DS.attr('string', {default: "My bet"}),
  description: DS.attr('string'),
  amount: DS.attr('number'),
  timestamp: DS.attr('date')
});
