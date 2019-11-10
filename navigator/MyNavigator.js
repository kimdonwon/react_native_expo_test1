import  HomeScreen  from '../screens/StartScreen';
import  Login  from '../screens/Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login:Login
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
