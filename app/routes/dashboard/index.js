import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  model() {
    let session = this.get("session");
    return Ember.RSVP.hash({
      bets: this.store.findAll('bet'),
      users: fetch('https://brett-anderson.auth0.com/api/v2/users', {
               method: 'GET',
               cache: false,
               headers: {
                 'Authorization': 'Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ6RWdQbDVTcEJ3WkRub3JCa0lWekRoa0xqY2pFRWliMiIsInNjb3BlcyI6eyJ1c2VycyI6eyJhY3Rpb25zIjpbInJlYWQiXX19LCJpYXQiOjE0NTk5MzIxNTUsImp0aSI6IjNjZDkxMjg3YTNkMzI3YzNmYjczMDA1OTdjODAyMzY3In0.3_6W_FXfLsfLYzx28dufv300od9PJGnxUBodykFu9Ss"}'
               }
             })
    });
  },
});
