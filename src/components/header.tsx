import React, { Props } from 'react';
import { Text, StyleSheet ,Image ,ImageBackground ,TouchableOpacity, Dimensions, View} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation , SafeAreaView } from 'react-navigation';

import  Ionicons  from '@expo/vector-icons/Ionicons';


const {width} = Dimensions.get('window')

export default class Header extends React.Component {
    render() {
        const ItemName : String = 'SHAMPO'

      return (
             <SafeAreaView>
                  <View style={styles.headerStyle}>
                      <View style ={styles.backIconStyle}>
                      <Ionicons name="ios-arrow-back" size={29} color="green" onPress ={()=> console.log(this.props.navigation.goBack(null))} />
                      </View>
                 <Text style={styles.headerTitleStyle} > {ItemName} </Text>
               </View>

             </SafeAreaView>
              
      );
}
}

const styles = StyleSheet.create({
    headerStyle :{
        backgroundColor :'#fff' ,
        flexDirection : 'row' ,
        height :width /5 ,
        alignItems :'center'
       // justifyContent : 'space-around'
        },

    headerTitleStyle :{
         marginBottom: 10,
         marginTop: 7,
         fontWeight :'bold' ,
         fontSize :20 ,
         flex :2

    } ,
    backIconStyle :{
        flex : 1 ,
        marginHorizontal :10
    }
 
   
});

