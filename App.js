
import React from 'react';
import {SafeAreaView,Text,View,} from 'react-native';
import Navigator from './src/navigator/Navigator';
import store from './src/redux/store'
import { Provider } from 'react-redux'


const App = () => {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

export default App;

