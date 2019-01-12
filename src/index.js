import { createStore } from 'redux';

import reducer from './reducer';
import { decAction, incAction, rndAction } from './actions';

const store = createStore(reducer);

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
