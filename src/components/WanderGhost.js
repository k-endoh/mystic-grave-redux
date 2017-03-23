/**
 * Created by katsuya on 2017/03/21.
 */

import React, { Component } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const WanderGhost = (props) => (
    <Entity obj-model={{obj: '#tree-obj', mtl: '#tree-mtl'}} rotation={[0, 0, 0]} position={[0, -2, 5]} scale={[0.1, 0.1, 0.1]}>
        <a-animation
            dur = "5000"
            attribute="rotation"
            from="0 0 0"
            to="0 360 0"
            repeat="indefinite"
            easing="linear">
        </a-animation>
        {props.children}
    </Entity>

);

export default WanderGhost;
