import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/app-container';
import Bridge from './bridge';
import Actions from './actions';

let node = document.querySelector('.app-container');
let theApp = null;

try {
  Bridge.setup(() => {
    ReactDOM.unmountComponentAtNode(node);
    node.innerHTML = '';
    theApp = ReactDOM.render(<AppContainer />, node);
  }, (message) => console.error(message));
} catch(e) {
  theApp.showGlobalError(e.toString());
}