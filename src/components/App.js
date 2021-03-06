import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as StageActions from '../actions/StageActions';
import Stage from './Stage';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const {dispatch, data} = this.props;
    const actions = bindActionCreators(StageActions, dispatch);

    return (
        <Stage actions={actions} data={data}/>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  data: React.PropTypes.array.isRequired
};

export default connect(state => state.Stage)(App);
