import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  model() {
    let session = this.get("session");
    return Ember.RSVP.hash({
      bets: this.store.findAll('bet'),
      messages: this.store.query('message', {
        limitToLast: 25

      })
    });
  },
});
