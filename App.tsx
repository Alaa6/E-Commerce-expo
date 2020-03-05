import React ,{useState}from 'react';
import { StyleSheet, Text, View, Button ,SafeAreaView} from 'react-native';
import AppNavigator from './src/Navigator/appNavigator';


export default  function App() {
  // const [count, setCount] = useState(0);
  return (
            <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


