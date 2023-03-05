//npm install @react-navigation/native
//npm install @react-navigation/native-stack
//npm install react-native-snap-carousel
//npm install @react-navigation/drawer
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/stack



import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons'; 
import BatalhaApocalipse from './Telas/BatalhaApocalipse';
import User from './Telas/User/index';
import config from './Telas/Opçoes/index';
import pesquisa from './Telas/Pesquisa/index';
import EditPerfil from './Telas/Opçoes/Editar Perfil';
import Home from './Telas/Inicio/index'


const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:true, tabBarStyle:{
          backgroundColor:'#e0e0e0',
          borderTopWidth:0,
          width:'100%',
          justifyContent:'space-around'
        }}} sceneContainerStyle={{backgroundColor:'#292929'}}>
          
            <Tab.Screen name="Home" component={Home}
            options={{ headerTransparent:true, title:'Home', headerShown:false,tabBarIcon: ({ navigation }) => (
              <Icon name="home" size={30} color="#783560" />
              ) , tabBarLabel: 'Inicio', tabBarHideOnKeyboard:true, unmountOnBlur:true, tabBarActiveTintColor: '#783560',
              tabBarInactiveTintColor: '#000',tabBarActiveBackgroundColor:'#ccc'}} />
        
              <Tab.Screen name="pesquisa" component={pesquisa} 
              options={{ headerTransparent:true, title:'pesquisa', headerShown:false, tabBarIcon: ({ navigation }) => (
              <Feather name="search" size={30} color="#783560" />
              ) , tabBarLabel: 'Pesquisar', tabBarHideOnKeyboard:true,tabBarActiveTintColor: '#783560',
              tabBarInactiveTintColor: '#000',tabBarActiveBackgroundColor:'#ccc' }} />
          
            {/* <Tab.Screen name="user" component={user}
            options={{headerTransparent:true, title:'user', headerShown:false,tabBarIcon: ({ navigation }) => (
            <Icon name='user' size={30} color="#783560" />
            ) , tabBarLabel: 'Perfil', tabBarHideOnKeyboard:true }} /> */}
        
            <Tab.Screen name="config" component={config}
             options={{headerTransparent:true, title:'config', headerShown:false,tabBarIcon: ({ navigation }) => (
            <Feather name="settings" size={30} color="#783560" />
            ) , tabBarLabel: 'Opções',tabBarHideOnKeyboard:true, tabBarActiveTintColor: '#783560',
            tabBarInactiveTintColor: '#000',tabBarActiveBackgroundColor:'#ccc'}} />
            </Tab.Navigator >
    
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeTabs' component={HomeTabs}  options={{headerTransparent:true, title:'', headerShown:false}}/>
        <Stack.Screen name="BatalhaApocalipse" component={BatalhaApocalipse} options={{headerTransparent:true, title:'', headerTintColor:'#000', headerPressOpacity:2, headerShown:false}}/>
        <Stack.Screen name='EditPerfil' component={EditPerfil} options={{headerTransparent:true, title:'', headerTintColor:'#000', headerShown:false}}/>
        <Stack.Screen name='User' component={User} options={{headerTransparent:true, title:'', headerTintColor:'#000',headerPressOpacity:2,headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}