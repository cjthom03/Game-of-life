export const addButtonEvent = (selector, callback, type = 'click') => {
  document.querySelector(selector)
    .addEventListener(type, callback);
};
