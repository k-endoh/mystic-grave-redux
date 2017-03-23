import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../components/App';

const store = configureStore();

export default React.createClass({
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
});
