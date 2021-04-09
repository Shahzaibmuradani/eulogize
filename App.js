
import React from 'react';
import {SafeAreaView,Text,View,} from 'react-native';
import Navigator from './src/navigator/Navigator';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <Navigator/>
        </PaperProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

