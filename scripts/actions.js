import SideBarActions from './sidebar_actions';
import { addEvent } from './utils';

export const setEventListeners = game => {
  startButtonEvents(game);
  addEvent('#pause', () => game.pause() );
  addEvent('#play', () => game.play() );
  addEvent('#clear', () => game.clearBoard() );
  addEvent('#speed', (e) => changeSpeed(e, game), 'change');
  addEvent('#rules', (e) => changeRules(e, game), 'change');
  addEvent('#display-help', () => displayHelp());
  let sidebar = new SideBarActions(game);
};


const startButtonEvents = game => {
  const startButton = document.querySelector('#start');

  startButton.addEventListener('click', () => {
    let parent = startButton.parentElement;
    startButton.addEventListener('animationend', () => {
      parent.classList.add('hide');
    });

    let children = document.querySelectorAll('.title-wrapper > div');
    children.forEach(child => {
      child.classList.remove('animated','fadeInDown');
      child.classList.add('animated','fadeOutUp');
    });

    addEvent('#toggle-sidebar', () => toggleSidebar());
    game.start();
  });
};

const toggleSidebar = () => {
  let sidebar = document.querySelector('.sidebar');
  let button = document.querySelector('#toggle-sidebar');
  sidebar.classList.remove('hide');
  if([...sidebar.classList].includes('slideInLeft')) {
    sidebar.classList.remove('slideInLeft');
    sidebar.classList.add('slideOutLeft');
  } else {
    sidebar.classList.remove('slideOutLeft');
    sidebar.classList.add('slideInLeft');
  }

  if([...button.classList].includes('fa-plus')) {
    button.classList.remove('fa-plus');
    button.classList.add('fa-chevron-circle-left');
  } else {
    button.classList.remove('fa-chevron-circle-left');
    button.classList.add('fa-plus');
  }
};

const changeSpeed = (e, game) => {
  game.speed = e.target.value;
  if(game.playInterval){
    game.pause();
    game.play();
  }
};

const changeRules = (e, game) => {
  game.changeRules(e.target.value);
};

const displayHelp = () => {
  let background = document.getElementById('modal-background');
  let modal = document.getElementById('modal-child');
  let closeModal = document.getElementById('close-about-container');

  background.classList.remove('hide');
  modal.classList.remove('hide');

  addEvent('#modal-background', () => hideHelp(background, modal, closeModal));
  addEvent('#close-about-container', () => hideHelp(background, modal, closeModal));

};

const hideHelp = (background, modal, closeModal) => {
  background.classList.add('hide');
  modal.classList.add('hide');

  background.removeEventListener('click', () => hideHelp());
  closeModal.removeEventListener('click', () => hideHelp());
};
