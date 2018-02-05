import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import Reducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
            <Provider store={createStoreWithMiddleware(Reducer)}>
                <App/>
            </Provider>, 
            document.getElementById('root'));
