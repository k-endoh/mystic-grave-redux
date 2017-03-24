import * as ActionTypes from '../constants/ActionTypes';

export function mazeUpdate(data) {
  return {
    type: ActionTypes.SERVER_MAZE_UPDATE,
    data
  };
}
