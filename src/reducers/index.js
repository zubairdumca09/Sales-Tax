import { combineReducers }	from 'redux';
import itemReducer from './saveItem'

const rootReducer = combineReducers({
  items: itemReducer
});

export default rootReducer;
