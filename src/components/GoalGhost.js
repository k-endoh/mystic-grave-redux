/**
 * Created by katsuya on 2017/03/21.
 */


import React, { Component } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

const GoalGhost = (props) => (
    <Entity obj-model={{obj: '#tree-obj', mtl: '#tree-mtl'}} rotation={[0, 0, 0]} position={[0, -2, 5]} scale={[0.1, 0.1, 0.1]}>
        <a-animation
            dur = "200"
            attribute="position"
            from="7.5 0.25 7.5"
            to="7.5 0.35 7.5"
            direction="alternate-reverse"
            repeat="indefinite"
            easing="ease-out">
        </a-animation>
        <a-animation
            dur = "1000"
            attribute="rotation"
            from="0 180 0"
            to="0 270 0"
            direction="alternate-reverse"
            repeat="indefinite"
            easing="linear">
        </a-animation>
    </Entity>
);

export default GoalGhost;