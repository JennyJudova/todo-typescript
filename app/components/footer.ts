import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import TodoData from '../services/todo-data';

interface FooterArgs { }

export default class Footer extends Component<FooterArgs> {
  get todos() {
    return getOwner(this).lookup('service:todo-data') as TodoData;
  }
}
