import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubCategory from '../components/subCategory';
import Header from '../components/header';
import { withNavigation } from 'react-navigation';

 class SubCategories extends React.Component {
  render (){
    return (
      <View style={styles.row}>
        <View style={styles.col}>
        <Header title ='Home' />
           <SubCategory/>
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

export default withNavigation(SubCategories)
