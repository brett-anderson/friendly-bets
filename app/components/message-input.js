import Ember from 'ember';

export default Ember.Component.extend({

  keyPress: function (e) {
      if (e.which === 13) {
          this.sendAction();
      }
  }

});
