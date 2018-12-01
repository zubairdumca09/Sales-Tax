import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './components/App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/style/style.css';
export const store = configureStore();
render(
		<Provider store={store}>
				<App/>
		</Provider>,
		document.getElementById('root')
	);
