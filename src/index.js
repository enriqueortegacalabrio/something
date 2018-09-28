import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleCard from './Card';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
