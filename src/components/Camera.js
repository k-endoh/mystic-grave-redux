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

    let self = this;
    // TODO: これでいいのか？
    socket.on('controller', function (data) {
      if(data.operation === 'jump'){
        console.log('jump');
        console.log(self.state, document.getElementById('anim'));

        let event = new Event('jump');
        document.getElementById('myCamera').dispatchEvent(event);
        self.setState({ isFall: !self.state.isFall});

      }else if(data.operation === 'forward'){
        console.log('forward');
      }
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isFall : false
    };
  }

  render() {
    return (
      <a-camera id="myCamera"
                position="-7.5 -1 -7.5"
                rotation="0 225 0"
                raycaster
                crawling-cursor="target: #cursor">
        <a-cursor/>
        <a-animation
          id="anim"
          begin="jump"
          attribute="position"
          to="-7.5 7 -7.5"
          ease={this.state.isFall ? "ease-out" : "ease-in"}
          />
      </a-camera>
    )
  }
}

export default Camera;
