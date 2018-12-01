import * as types from './actionTypes';

export const saveItem = (item) => {
  return {
    type: types.SAVE_ITEM,
    data: item
  }
}
