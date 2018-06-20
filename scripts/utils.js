export const addEvent = (selector, callback, type = 'click') => {
  document.querySelector(selector)
    .addEventListener(type, callback);
};
