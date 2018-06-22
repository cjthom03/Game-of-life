import Game from './game';
import { setEventListeners } from './actions';

document.addEventListener('DOMContentLoaded', () => {
  let game = new Game;
  setEventListeners(game);
});
