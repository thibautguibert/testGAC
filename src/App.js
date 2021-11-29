import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import RouterNavigation from './Router';
import NavBar from './components/NavBar';
import { colors } from './style';

const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.yellow,
  },
});

const App = () => {
  console.log('app is loaded');
  return (
    <SafeAreaView style={styles.backgroundApp}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.yellow} />
      <RouterNavigation />
      <NavBar />
    </SafeAreaView>
  );
};

export default App;
