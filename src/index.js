import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import { decAction, incAction, rndAction } from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { incDispatch, decDispatch, rndDispatch } = bindActionCreators(
  {
    incDispatch: incAction,
    decDispatch: decAction,
    rndDispatch: rndAction,
  },
  dispatch,
);

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  console.log(`RND payload value: ${payload}`);
  rndDispatch(payload);
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
