import * as ActionTypes from '../constants/ActionTypes';
import io from 'socket.io-client';
export const socket = io('http://localhost:8000');

export function mazeUpdate(data) {
  return {
    type: ActionTypes.MAZE_UPDATE,
    data
  };
}
