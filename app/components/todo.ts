import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import TodoData from '../services/todo-data';

interface TodoArgs {
  target: Target;
  key: string;
}

interface Target {
  value: string;
}

export default class Todo extends Component<TodoArgs> {
  get todos() {
    return getOwner(this).lookup('service:todo-data') as TodoData;
  }
}
