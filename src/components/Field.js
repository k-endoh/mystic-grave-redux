import React, { Component } from 'react';

import 'aframe';
import { Entity } from 'aframe-react';

const Field = (props) => (
    <Entity>
        <a-box position="8.5 1.5 0" depth="18" height="3" color="#222222"></a-box>
        <a-box position="-8.5 1.5 0" depth="18" height="3" color="#222222"></a-box>
        <a-box position="0 1.5 8.5" width="16" height="3" color="#222222"></a-box>
        <a-box position="0 1.5 -8.5" width="16" height="3" color="#222222"></a-box>

        <a-plane id='myStage' rotation="-90 0 0" width="16" height="16" color="#242E12"></a-plane>
    </Entity>

);

export default Field;