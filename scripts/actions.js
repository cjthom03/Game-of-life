
export const setEventListeners = game => {
  startButtonEvents(game);
  addButtonEvent('#pause', game.pause.bind(game));
  addButtonEvent('#play', game.play.bind(game));
  addButtonEvent('#clear', game.clearBoard.bind(game));
  addButtonEvent('#toggle-sidebar', toggleSidebar);
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

    game.start();
  });
};

const addButtonEvent = (selector, callback, type = 'click') => {
  document.querySelector(selector)
    .addEventListener(type, callback);
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
