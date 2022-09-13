// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getGreetings } from './greetingsReducer';
import '@hotwired/turbo-rails';
import './controllers';

import Greeting from './Greeting';

store.dispatch(getGreetings());

function App() {
  return (
    <Greeting />
  )
}

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('root'),
);