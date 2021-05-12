import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './state/store/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

// hack to gain access to store in dev tools
window.store = store;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	document.getElementById('root')
);

reportWebVitals();
