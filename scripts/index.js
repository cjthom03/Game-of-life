import Game from './game';
import { setEventListeners } from './actions';

document.addEventListener('DOMContentLoaded', () => {
  let game = new Game;

  //Test START
  window.game = game;
  //Test END

  setEventListeners(game);

});
