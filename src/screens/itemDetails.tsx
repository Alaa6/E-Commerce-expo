import React from 'react';
import { Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Dimensions, View } from 'react-native';
import { Card, Button, Input } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { ScrollView } from 'react-native-gesture-handler';


const { width } = Dimensions.get('window')
let count = 0 ;

function increaseCount (){
    count ++ ;
    

}

class ItemDetails extends React.Component {

    constructor (props){
        super (props)

        this.state ={
            count : 0 
        }

    }
    increaseCount =()=>{
        this.setState({
        count : count ++
            
        })
    }

    decreaseCount =()=>{
        this.setState({
            count : count--
            
        })
    }
    render() {
        const params = this.props.navigation.state.params;
        console.log(params);
        console.log('test ' + params.imgSrc);

        return (
            <ScrollView>
                <View style={styles.card}>
                    <Image source={params.imgSrc} style={{ width: width / 2, height: width / 2, alignSelf: 'center' }} />

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>{params.ItemName}</Text>
                        <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}> {`500 mg`}</Text>

                    </View>
                    <View style={{ backgroundColor: '#8fff00', width: width / 3, height: width / 5, borderTopLeftRadius: 30, borderBottomRightRadius: 30, justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} >6.99 KD</Text>
                    </View>
                </View>
                <Text style={{ color: '#6d6d7e', fontSize: 18, fontWeight: 'bold', marginHorizontal: 20 }}> {`SHAMPO  500 M`}</Text>

                <View style={{ alignItems: 'flex-end' }}>
                    <Text style={{ color: '#6d6d7e', fontSize: 18, fontWeight: 'bold', marginHorizontal: 20 }}> {`Share If you Care`}</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 43, marginTop: 10 }}>
                        <View style={{ backgroundColor: '#8fff00', width: '15%', height: '55%', justifyContent: 'center', alignItems: 'center', marginRight: 3 }} >
                            <AntDesign name="sharealt" size={33} color="#fff" />
                        </View>
                        <View style={{ backgroundColor: '#1bd741', width: '15%', height: '55%', justifyContent: 'center', alignItems: 'center', marginLeft: 3 }}>
                            <FontAwesome name="whatsapp" size={33} color="#fff" />
                        </View>
                    </View>
                    <Input placeholder='Add a note' inputStyle={{ fontWeight: 'bold', color: '#6d6d7e' }} placeholderTextColor='#6d6d7e' />
                    <View style={{ backgroundColor: '#90ff00', width: width / 1.1, height: width / 5, alignSelf: 'center', borderRadius: 15, marginTop: 8 , flexDirection :'row' ,alignItems :'center' ,marginBottom :6  , elevation :10}}>
                        <View style={{ flexDirection: 'row' , marginHorizontal :7 ,borderRightWidth :3 ,borderRightColor :'#fff'  , width :width /3.5 ,height :width/5 ,alignItems:'center'}}>
                            <TouchableOpacity onPress ={this.decreaseCount}>
                            <MaterialCommunityIcons name="minus" size={33} color="#fff"  />

                            </TouchableOpacity>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 25, fontWeight: 'bold' }} > {this.state.count}</Text>
                            <TouchableOpacity onPress ={this.increaseCount}>
                            <MaterialIcon name="add" size={33} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }} > {`ADD TO CART`}</Text>

                    </View>
                </View>

            </ScrollView>

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
    },
    card: {
        width: width / 1.1,
        height: width,
        backgroundColor: '#fff',
        borderRadius: 6,
        marginTop: 7,
        marginHorizontal: 10,
        elevation: 10,
        justifyContent: 'center'

    },
    cartIconStyle: {
        alignSelf: 'center'
    },
    col: {
        flex: 1,
    },
    counterViewStyle: {

        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    minus: {
        // borderTopRightRadius :7 
    }


});

export default withNavigation(ItemDetails);