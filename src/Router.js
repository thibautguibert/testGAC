import React from 'react';
import { Modal, Router, Scene } from 'react-native-router-flux';
import OdometerList from './OdometerList';
import AddOdometer from './AddOdometer';
import ReadMe from './ReadMe';
import SuccessModal from './components/SuccessModal';

const RouterNavigation = () => (
  <Router>
    <Modal>
      <Scene key="root" hideNavBar>
        <Scene key="odometerList" component={OdometerList} initial />
        <Scene key="addOdometer" component={AddOdometer} />
        <Scene key="readMe" component={ReadMe} />
      </Scene>
      <Scene key="successModal" component={SuccessModal} hideNavBar />
    </Modal>
  </Router>
);

export default RouterNavigation;
