import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


axios.defaults.headers.common['authorization'] = `random token`
axios.defaults.headers.post['Content-Type'] = 'application/json';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
