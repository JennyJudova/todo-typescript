import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import TodoData from '../services/todo-data';

export default class Active extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  get todos() {
    return getOwner(this).lookup('service:todo-data') as TodoData;
  }

  model() {
    let todos = this.todos;

    return {
      get activeTodos() {
        return todos.incomplete;
      }
    }
  }
}
