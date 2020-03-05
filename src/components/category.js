import React from 'react';
import { Text, StyleSheet, Image, ImageBackground, TouchableOpacity, View, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width } = Dimensions.get('window')
class Category extends React.Component {
    render() {
        const status = this.props.status
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SubCategories')} >

                <View  style={styles.card}>
                    <Image source={require('../../assets/shampo.jpg')} style ={{width :width/2 , height : width /2 ,borderRadius: 10  }}/>
                    <View style={{ width: width / 3, height: width / 3.1 }}>
                            <Text style={{ marginBottom: 10, marginTop: 7, fontWeight: 'bold', fontSize: 20 }} h2>   {this.props.title} </Text>
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
    },
    card: {
        width: width / 1.1,
        flexDirection :'row-reverse',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 7,
        marginHorizontal: 10,


    },
    cartIconStyle: {
        alignSelf: 'center'
    }

});

export default withNavigation(Category);