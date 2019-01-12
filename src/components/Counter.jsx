import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';


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

const mapStateToProps = state => ({ counter: state });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
