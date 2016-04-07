import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    $(this.element).animate({ scrollTop: this.element.scrollHeight}, "slow");
  },

});
