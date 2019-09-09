import { createStore, combineReducers} from 'redux';
import { reducer as login } from 'redux-form';

const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass login under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: login
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
 window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;