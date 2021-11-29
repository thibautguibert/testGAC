import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import RouterNavigation from './Router';
import NavBar from './components/NavBar';
import { colors } from './style';
import * as reducers from './reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer, compose(applyMiddleware(thunk)));

const styles = StyleSheet.create({
  backgroundApp: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.yellow,
  },
});

const App = () => {
  console.log(store.getState());
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
