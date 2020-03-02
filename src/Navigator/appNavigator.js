import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import SubCategories from '../screens/subCategories';
import { createAppContainer } from 'react-navigation';
import ItemScreen from '../screens/items';





const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: { title: 'Home' }  // props !  title bs ! ,, agrb 7aga tania
        },
        SubCategories: {
            screen: SubCategories,
            navigationOptions: { title: 'SubCategories' }
        } ,
        Items : {
            screen: ItemScreen,
            navigationOptions: { title: 'Items' }
        }
    },
    {
        initialRouteName: "Home"
    }
);
export default createAppContainer(AppNavigator);
//export default AppNavigator;
