import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from '../components/item';
import { withNavigation } from 'react-navigation';

 class Items extends React.Component {
  render (){
    return (
      <View style={styles.row}>
        <View style={styles.col}>
        <Item/>
  
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
export default withNavigation(Items)