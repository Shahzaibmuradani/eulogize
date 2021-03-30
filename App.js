
import React from 'react';
import {SafeAreaView,Text,View,} from 'react-native';
import Navigator from './src/navigator/Navigator';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigator/>
      </PaperProvider>
    </Provider>
  );
}

export default App;

