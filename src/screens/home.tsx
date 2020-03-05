import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Product from '../components/category';
import Header from '../components/header';


class HomeScreen extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <Header title ='Home' />
        <ScrollView>
          <Product  title ='Food & beverage'/>
          <Product title ='Home & personal care' />
          <Product title ='Fresh fruit & vegetable' />
          <Product title ='Butcher' />
        </ScrollView>
      </View>

    );

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center'
  },
  col: {
    flex: 1,
  },
});


export default  withNavigation(HomeScreen)// lyh ?
