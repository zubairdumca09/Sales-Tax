import { combineReducers }	from 'redux';
import loginReducer from '../components/Login/reducer';
import planetReducer from '../components/Planets/reducer';

const rootReducer = combineReducers({
  user: loginReducer,
  planets: planetReducer
});

export default rootReducer;
