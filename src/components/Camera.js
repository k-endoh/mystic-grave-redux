/**
 * Created by katsuya on 2017/03/21.
 */

import React, { Component } from 'react';
import 'aframe';

const Camera = (props) => (
    <a-camera id="myCamera"
              position="-7.5 -1 -7.5"
              rotation="0 225 0"
              raycaster
              crawling-cursor="target: #cursor">
        <a-cursor></a-cursor>
    </a-camera>
);

export default Camera;