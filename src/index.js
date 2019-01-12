import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'RND':
      return state + action.payload;
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const incAction = () => ({ type: 'INC' });
const decAction = () => ({ type: 'DEC' });
const rndAction = payload => ({ type: 'INC', payload });

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(incAction());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(decAction());
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  console.log(`RND payload value: ${payload}`);
  store.dispatch(rndAction(payload));
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
