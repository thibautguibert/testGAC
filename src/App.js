import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import moment from 'moment-timezone';
import momentFr from './utils/moment.fr';

import RouterNavigation from './Router';
import NavBar from './components/NavBar';
import { colors } from './style';
import * as reducers from './reducers';
import mileageReadingsJson from './data/mileage_readings.json';

const reducer = combineReducers(reducers);
const store = createStore(reducer, compose(applyMiddleware(thunk)));

const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.yellow,
  },
});

moment.updateLocale('fr', momentFr);
moment.tz.setDefault('Europe/Paris');

async function getItem(key) {
  const value = await AsyncStorage.getItem(key);
  return value;
}

const App = () => {
  const retrieveFirstLogin = async () => {
    const firstLogin = await getItem('FIRST_LOGIN');
    return firstLogin;
  };

  useEffect(() => {
    retrieveFirstLogin().then((result) => {
      if (!result) {
        AsyncStorage.setItem('FIRST_LOGIN', 'false');
        AsyncStorage.setItem('MILEAGE_READINGS', JSON.stringify(mileageReadingsJson));
      }
    });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.backgroundApp}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.yellow} />
        <RouterNavigation />
        <NavBar />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
