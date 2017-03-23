import * as ActionTypes from '../constants/ActionTypes';

export function mazeUpdate(data) {
  return {
    type: ActionTypes.MAZE_UPDATE,
    data
  };
}
