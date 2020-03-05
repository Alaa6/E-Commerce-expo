import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import SubCategories from '../screens/subCategories';
import { createAppContainer } from 'react-navigation';
import ItemScreen from '../screens/items';
import ItemDetails from '../screens/itemDetails';






const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { 
                // animationEnabled :true
                 headerShown :false
                  } , // props !  title bs ! ,, agrb 7aga tania

        },
        SubCategories: {
            screen: SubCategories,
            navigationOptions: { 
                headerShown :false
            }
        } ,
        Items : {
            screen: ItemScreen,
            navigationOptions: { title: 'Items' }
        },
        ItemDetails : {
            screen: ItemDetails,
            navigationOptions: { title: 'Items' }
        }
    },
    {
    }
);
export default createAppContainer(AppNavigator);
//export default AppNavigator;
