import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      userProfile: this.store.query('userProfile', {
        sortBy: 'user_id',
        eqalTo: this.get('session.userProfile.user_id')
      }),
      messages: this.store.query('message', {
        limitToLast: 25
      })
    });
  },

  afterModel(model) {
    if(model.userProfile.get('content.length') === 0) {
      let userProfile = this.store.createRecord('userProfile');
      model.userProfile.set('balance', 1000);
      model.userProfile.save();
    };
  }
});
