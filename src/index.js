import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
// note: these functions have the same names, as actionCreator functions,
// however thew are wrapped / bind with dispatch in this context

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  console.log(`RND payload value: ${payload}`);
  rnd(payload);
});

const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};

store.subscribe(update);
