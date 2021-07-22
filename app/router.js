import EmberRouter from '@ember/routing/router';
import config from 'todo-typescript/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('completed');
  this.route('active');
});
