import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const createStateWithMiddleware = composeEnhancers(applyMiddleware(sagaMiddleware))(createStore);

export default function configureStore(initialState) {
    const store = createStateWithMiddleware(rootReducer, initialState);
    sagaMiddleware.run(rootSaga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../ducks', () => {
            const nextReducer = require('../ducks/index').default;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}