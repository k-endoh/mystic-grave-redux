import React from 'react';

import 'aframe';
import { Scene, Entity } from 'aframe-react';

import WanderGhost from './WanderGhost';
import GoalGhost from './GoalGhost';
import Field from './Field';
import Camera from './Camera';

import io from 'socket.io-client';


let serverData = require('../config/server_config.json');
export const socket = io(serverData.server.address);

const BOX_SIZE = 1;
const STAGE_SIZE = 16;

class Stage extends React.Component {

  componentWillMount() {
    const {actions} = this.props;
    socket.on('maze_update', function (data) {
      actions.mazeUpdate(data);
      console.log('maze_update');
    });
  }

  constructor(props){
    super(props);
  }

  render() {
    return(
      <Scene>

        {/* 壁の配置 */}
        {
          this.props.data.map((object, z) => {
          return this.props.data[z].map((object, x) => {
            if (this.props.data[z][x]) {
              return <Entity
                geometry={{primitive: 'box'}}
                material="color: #323232"
                position={[BOX_SIZE/2 + x - STAGE_SIZE/2, BOX_SIZE/2, BOX_SIZE/2 + z - STAGE_SIZE/2]}
                scale={[BOX_SIZE, BOX_SIZE, BOX_SIZE]}
              />;
            }
          });
        }) }

        {/* アセットのロード */}
        <a-assets>
          <a-asset-item id="tree-obj" src="/assets/models/Ghost/obake3d.obj"></a-asset-item>
          <a-asset-item id="tree-mtl" src="/assets/models/Ghost/obake3d.mtl"></a-asset-item>
        </a-assets>

        <Camera/>

        <a-sky color="#260045"></a-sky>
        {/* 壁と床 */}
        <Field/>

        {/* さまよいおばけ */}
        <WanderGhost>
          <a-animation
            dur = "5000"
            attribute="position"
            from="-8.0 0.3 0.0"
            to="8.0 0.3 0.0"
            direction="alternate-reverse"
            repeat="indefinite"
            easing="ease-out">
          </a-animation>
        </WanderGhost>

        {/* さまよいおばけ */}
        <WanderGhost>
          <a-animation
            dur = "3000"
            attribute="position"
            from="0.0 0.3 -8.0"
            to="0.0 0.3 8.0"
            direction="alternate-reverse"
            repeat="indefinite"
            easing="ease-out">
          </a-animation>
        </WanderGhost>

        {/* ゴールおばけ */}
        <GoalGhost/>
      </Scene>
    )
  }
}

Stage.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Stage;