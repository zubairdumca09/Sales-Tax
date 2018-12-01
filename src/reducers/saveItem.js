import * as types from '../actions/actionTypes';

export default function itemReducer(state = []  , action){
  console.log(action)
	switch(action.type){
		case types.SAVE_ITEM :
			return [...state, action.data];
		default :
			return state;
	}
}
