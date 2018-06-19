
export const setEventListeners = game => {
  startButtonEvents(game);
  addButtonEvent('#pause', game.pause.bind(game));
  addButtonEvent('#play', game.play.bind(game));
  addButtonEvent('#clear', game.clearBoard.bind(game));
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
