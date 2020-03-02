import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Product from '../components/category';
class HomeScreen extends React.Component {
  render (){

    return (
      <View style={styles.row}>

        <View style={styles.col}>
            <Product/>  
        </View>
      
        </View>
        
    );

  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
},
col: {
    flex: 1,
},
});


export default withNavigation(HomeScreen); // lyh ?
