import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text: string) {
    this.text = text;
  }
}

export default class TodoData extends Service {
  @tracked todos: Todo[] = [];

  get all() {
    return this.todos;
  }

  get incomplete() {
    return this.todos.filter(todo => {
      return todo.isCompleted === false;
    });
  }

  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }

  get completed() {
    return this.todos.filter(todo => todo.isCompleted);
  }

  @action
  toggle(todo: Todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  @action
  add(text: string) {
    let newTodo = new Todo(text);

    this.todos = [...this.todos, newTodo];
  }

  @action
  clearCompleted() {
    this.todos = this.incomplete;
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'todo-data': TodoData;
  }
}
