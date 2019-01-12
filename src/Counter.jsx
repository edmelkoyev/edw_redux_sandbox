import React from 'react';

const Counter = ({
  counter, inc, dec, rnd,
}) => (
  <div className="jumbotron">
    <h2>{counter}</h2>
    <button
      onClick={dec}
      type="button"
      className="btn btn-secondary btn-lg"
    >
      DEC
    </button>
    <button
      onClick={inc}
      type="button"
      className="btn btn-primary btn-lg"
    >
      INC
    </button>
    <button
      onClick={rnd}
      type="button"
      className="btn btn-info btn-lg"
    >
      RND
    </button>
  </div>);

export default Counter;
