import { addButtonEvent } from './utils';

class SidebarActions {
  constructor(game) {
    this.game = game;
    this.currentEvent = null;
    addButtonEvent('#seeds', () => game.randomSeeds());
    addButtonEvent('#add-row', () => this.setEvent('#add-row'));
    addButtonEvent('#add-col', () => this.setEvent('#add-col'));
    addButtonEvent('#glider', () => this.setEvent('#glider'));
    addButtonEvent('#gun', () => this.setEvent('#gun'));
    addButtonEvent('#spaceship', () => this.setEvent('#spaceship'));
  }

  setEvent(eventName) {
    this.changeEvent(eventName);
    this.game.setEvent(eventName);
  }

  changeEvent(newEvent){
    if(this.currentEvent){
      document.querySelector(this.currentEvent)
      .classList.remove('animated', 'infinite', 'pulse', 'active-action');
    }
    document.querySelector(newEvent)
    .classList.add('animated', 'infinite', 'pulse', 'active-action');
    this.currentEvent = newEvent;
  }
}

export default SidebarActions;
