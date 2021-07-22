import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getOwner } from '@ember/application';
import TodoData from '../services/todo-data';

interface HeaderArgs {
  target: Target;
  key: string;
}

interface Target {
  value: string;
}

export default class Header extends Component<HeaderArgs> {
  get todos() {
    return getOwner(this).lookup('service:todo-data') as TodoData;
  }

  @action
  onKeyUp({ target, key }: HeaderArgs) {
    let text = target.value.trim();
    let hasValue = Boolean(text);

    if (key === 'Enter' && hasValue) {
      this.todos.add(text);

      target.value = ''
    }
  }
}
