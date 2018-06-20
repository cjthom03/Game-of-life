import Game from './game';
import { setEventListeners } from './actions';

document.addEventListener('DOMContentLoaded', () => {
  let game = new Game;

  // TEST START
  window.game = game;
  // TEST END

  setEventListeners(game);
});
