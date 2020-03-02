import React from 'react';
import { Text, StyleSheet ,Image ,ImageBackground ,TouchableOpacity, Dimensions, View} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import  Ionicons  from '@expo/vector-icons/FontAwesome';

const {width} = Dimensions.get('window')

class Category extends React.Component {
    render() {
        const status = this.props.status
      return (
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Items')} >
               <View style={styles.card}>
                 <Image source ={ {uri:'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} style={{width :width/2.3 ,height:width/3}}/>
                 <Text style={{marginBottom: 10, marginTop: 7,fontWeight :'bold' ,textAlign:'center' ,fontSize :20}} h2>    Kid shoes </Text>
                 <View style={styles.cartIconStyle}>
                   <Ionicons  name="shopping-cart" size={32} color="green" />
                 </View>
                <ImageBackground source ={ require('../../assets/ItemsCount.svg')} style={{width :100 ,height:100}}>
                <Text style={{marginBottom: 10, marginTop: 20 ,textAlign :'center' ,fontWeight:'bold' ,color :'#fff'}} h2>  - </Text> 
                </ImageBackground> 
               </View>
          </TouchableOpacity>
      );
}
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    } ,
    card :{
        width :width/2,
        backgroundColor :'#fff' ,
        borderRadius : 6  ,
        marginTop :7 ,
        marginHorizontal : 10

        },
  cartIconStyle :{
      alignSelf:'center'
  }

   
});

export default withNavigation(Category);