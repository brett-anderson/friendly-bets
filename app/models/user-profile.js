import DS from 'ember-data';

export default DS.Model.extend({
  balance: DS.attr('number'),
  user_id: DS.attr('string')

});
