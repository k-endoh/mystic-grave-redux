/**
 * Created by katsuya on 2017/03/21.
 */

import React, { Component } from 'react';
import 'aframe';

import io from 'socket.io-client';
let serverData = require('../config/server_config.json');
export const socket = io(serverData.server.address);

class Camera extends React.Component {

  componentWillMount() {
    // TODO: これでいいのか？
    socket.on('controller', function (data) {
      if(data.operation == 'jump'){
        console.log('jump');
        let event = new Event('jump');
        document.getElementById('myCamera').dispatchEvent(event);

      }else if(data.operation == 'forward'){
        console.log('forward');
      }
    });
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a-camera id="myCamera"
                position="-7.5 -1 -7.5"
                rotation="0 225 0"
                raycaster
                crawling-cursor="target: #cursor">
        <a-cursor></a-cursor>

        <a-animation begin="jump" end="fall" attribute="position" to="-7.5 7 -7.5" ease="ease-out-cubic"></a-animation>
        <a-animation begin="fall" attribute="position" to="-7.5 -1 -7.5"></a-animation>
      </a-camera>
    )
  }
}

Camera.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Camera;

// import React, { Component } from 'react';
// import 'aframe';
//
// const Camera = (props) => (
//     <a-camera id="myCamera"
//               position="-7.5 -1 -7.5"
//               rotation="0 225 0"
//               raycaster
//               crawling-cursor="target: #cursor">
//         <a-cursor></a-cursor>
//     </a-camera>
// );
//
// export default Camera;