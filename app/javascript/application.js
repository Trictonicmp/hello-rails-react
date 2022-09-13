// Entry point for the build script in your package.json
import React from 'react';
import ReactDOM from 'react-dom';
import '@hotwired/turbo-rails';
import './controllers';

import Greeting from './Greeting'

function App() {
  return (
    <>
    <Greeting />
    <h1>hello</h1>
    </>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);import "@hotwired/turbo-rails"
import "./controllers"
