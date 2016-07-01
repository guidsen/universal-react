import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext } from 'react-router';
import { Provider } from 'react-redux';

export default (renderProps, store) => renderToString(
  <Provider store={store}>
    <RouterContext {...renderProps} />
  </Provider>
);
