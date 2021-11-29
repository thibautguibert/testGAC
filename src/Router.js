import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import OdometerList from './OdometerList';
import AddOdometer from './AddOdometer';
import ReadMe from './ReadMe';

const RouterNavigation = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="odometerList" component={OdometerList} initial />
      <Scene key="addOdometer" component={AddOdometer} />
      <Scene key="readMe" component={ReadMe} />
    </Scene>
  </Router>
);

export default RouterNavigation;
