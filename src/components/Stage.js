/**
 * Created by katsuya on 2017/03/23.
 */

import React from 'react';

import 'aframe';
import { Scene, Entity } from 'aframe-react';

import WanderGhost from './WanderGhost';
import GoalGhost from './GoalGhost';
import Field from './Field';
import Camera from './Camera';

import io from 'socket.io-client';
export const socket = io('http://localhost:8000');

class Stage extends React.Component {

  componentWillMount() {
    const {actions} = this.props;
    socket.on('maze_update', function (data) {
      actions.mazeUpdate(data);
    })
  }

  constructor(props){
    super(props);
  }

  render() {
    return(
      <Scene>

        {console.log(this.props.data)}
        {
          this.props.data.map((object, z) => {
          return this.props.data[z].map((object, x) => {
            if (this.props.data[z][x]) {
              return <Entity
                geometry={{primitive: 'box'}}
                material="color: #323232"
                position={[0.5 + x - 8, 0.5, 0.5 + z - 8]}
                scale={[1, 1, 1]}
              />;
            }else{
              return <Entity/>
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

        <Entity text={{value: 'HELLO WORLD', color: 'black'}} position={[0, 1, -5]} scale={[10, 10, 1]}/>
      </Scene>
    )
  }
}

Stage.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Stage;