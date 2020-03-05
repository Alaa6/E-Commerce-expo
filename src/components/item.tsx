import React, { Props } from 'react';
import { Text, StyleSheet ,Image ,ImageBackground ,TouchableOpacity, Dimensions, View} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import  Ionicons  from '@expo/vector-icons/FontAwesome';
import  AntDesign  from '@expo/vector-icons/AntDesign';
import  MaterialIcon  from '@expo/vector-icons/MaterialIcons';


const {width} = Dimensions.get('window')



class Item extends React.Component {
    render() {
        const imgSrc =require('../../assets/shampo-item.jpeg')
        const ItemName : String = 'SHAMPO'

      return (
         <TouchableOpacity onPress={() => this.props.navigation.navigate('ItemDetails' , {imgSrc  :imgSrc , ItemName :ItemName})} >
               <View style={styles.card}>
                 <Image source ={ imgSrc} style ={{width :width /2 ,height : width/2}}/>
                 <Text style={{marginBottom: 10, marginTop: 7,fontWeight :'bold' ,textAlign:'center' ,fontSize :20}} > {ItemName} </Text>
               <View style ={styles.counterViewStyle}>
                   <Text style={{color :'#58595B' ,textAlign:'center' ,fontSize :16 ,fontWeight :'bold' ,flex :0.70}}>24.99 KD</Text>
                   <Text  style={{color :'#939598' ,textAlign:'center' ,fontSize :16 ,fontWeight :'100' ,flex:0.30 }}> x 2</Text>
                   <View >
                   <AntDesign iconStyle={styles.minus} name="minussquare" size={29} color="green" />
                   </View>

                   <View > 
                   <MaterialIcon  name="add-box" size={33} color="green" />
                   </View>
               </View>
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
  } ,
col: {
    flex: 1,
},
counterViewStyle :{

    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',

} ,
minus :{
   // borderTopRightRadius :7 
}

   
});

export default withNavigation(Item)