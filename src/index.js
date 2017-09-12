import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import injectTapEventPlugin from 'react-tap-event-plugin';


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render(<App/>, document.getElementById('root'));