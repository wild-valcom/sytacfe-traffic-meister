import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import Home from 'containers/Home';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);
