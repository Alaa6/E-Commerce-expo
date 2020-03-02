import React from 'react';
import { Text, StyleSheet ,Image ,ImageBackground ,TouchableOpacity} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


class Category extends React.Component {
    render() {
        const status = this.props.status
      return (
         <TouchableOpacity onPress={() => this.props.navigation.navigate('SubCategories')} >
               <Card
               
         image={{uri: 'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}}>
                {/* <ImageBackground source ={ {uri:'https://vader-prod.s3.amazonaws.com/1543958419-810KAtkwn6L.jpg'}} style={{width :100 ,height:100}}>
                <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text> 
                </ImageBackground> */}
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>  Kid shoes </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            {/* <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('SubCategories')} /> */}
        </Card>
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
    }
});

export default withNavigation(Category);