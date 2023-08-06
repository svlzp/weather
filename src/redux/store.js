import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import ApiReducer from './ApiReducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/redux-saga";

let reducers = combineReducers({
   ApiPage : ApiReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers , 
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
   applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga);



export default store ;