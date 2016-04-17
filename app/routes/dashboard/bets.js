import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  userProfile: Ember.computed.reads('session.data.authenticated.profile'),
  
  model() {
    return Ember.RSVP.hash({
      myBets: this.store.query('bet', {
        orderBy: 'creator/user_id',
        equalTo: this.get('userProfile.user_id')
      }),
      allBets: this.store.findAll('bet')
    });
  },
  afterModel(model){
    console.log(model);
  }

});
