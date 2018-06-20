import { addEvent } from './utils';

class SidebarActions {
  constructor(game) {
    this.game = game;
    this.currentEvent = null;
    addEvent('#seeds', () => game.randomSeeds());
    addEvent('#add-row', () => this.setEvent('#add-row'));
    addEvent('#add-col', () => this.setEvent('#add-col'));
    addEvent('#glider', () => this.setEvent('#glider'));
    addEvent('#gun', () => this.setEvent('#gun'));
    addEvent('#spaceship', () => this.setEvent('#spaceship'));
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
