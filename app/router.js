import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {
    this.route('bets', function() {
      this.route('new');
      this.route('show', {path: "/:bet_id"})
    })
    this.route('profile');
  });
});

export default Router;
