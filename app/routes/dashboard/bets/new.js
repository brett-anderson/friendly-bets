import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),

  model() {
    return this.store.createRecord('bet');
  },

  actions: {
    willTransition(transition) {
      let bet = this.controller.get('model');
      if( bet.get('hasDirtyAttributes') ){
        if(!confirm('If you leave without saving, this kills the bet.') ){
          transition.abort();
        } else {
          bet.destroyRecord();
        }
      }
      }
    }

});
