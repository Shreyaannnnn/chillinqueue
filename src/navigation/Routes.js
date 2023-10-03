
import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/authentication/Login';
import Otp from '../screens/authentication/Otp';
import Welcome from '../screens/Welcome';
import Profile from '../screens/Profile';
import CommingSoon from '../screens/CommingSoon';
import Menu from '../screens/Menu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Gender from '../screens/Gender'
import Bio from '../screens/Bio'
import Chatscreen from '../screens/Chatscreen'
import Trychat from '../screens/Trychat'
import Myqueue from '../screens/Myqueue'
import Queue from '../screens/Queue'
import Rewards from '../screens/Rewards'


// import HomeScreen from '../screens/Home/HomeScreen';
// import Otp from '../screens/Authentication/Otp';
// import { RootStackParamList } from '../interfaces/navigation';
// import AccountCreationSuccess from '../screens/AccountCreationSuccess';
// import WalletLogin from '../screens/Authentication/WalletLogin';
// import WalletRecoveryKeys from '../screens/WalletRecoveryKeys';
// import SubmitDetail from '../screens/SubmitDetail';
// import Bio from '../screens/Bio';
// import Profile from '../screens/Profile';
// import Progress from '../screens/Progress';
// import Explore from '../screens/Explore/Explore';
// import AntDesign from '@expo/vector-icons/AntDesign';
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function HomeTabs() {
//     return (
//         <Tab.Navigator screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === 'Welcome') {
//                     iconName = focused
//                         ? 'arrowright'
//                         : 'arrowleft';
//                 } else if (route.name === 'CommingSoon') {
//                     iconName = focused ? 'arrowright' : 'arrowleft';
//                 }

//                 // You can return any component that you like here!
//                 return <AntDesign name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: 'tomato',
//             tabBarInactiveTintColor: 'gray',
//         })}>
//             <Tab.Screen name="CommingSoon" component={CommingSoon} />
//             <Tab.Screen name="Welcome" component={Welcome} />
//         </Tab.Navigator>
//     );
// }
// function Root() {
//     return (
//         <Drawer.Navigator screenOptions={{ drawerActiveTintColor: "white", drawerInactiveTintColor: "#726322", drawerActiveBackgroundColor: "grey", overlayColor: "black", drawerHideStatusBarOnOpen: true, drawerInactiveBackgroundColor: "pink", drawerType: "slide" }}>
//             <Drawer.Screen name="Home" component={CommingSoon} />
//             <Drawer.Screen name="Menu" component={Menu} />
//             <Stack.Screen name="CommingSoon" component={Welcome} />
//         </Drawer.Navigator>
//     );
// }
const Routes = ({ }) => {
    return (

        <Stack.Navigator screenOptions={{ gestureEnabled: false }}
        //  initialRouteName='Login'
        >
            {/* <Stack.Screen
                      name="Home"
                      component={HomeTabs}
                      options={{ headerShown: false }}
                  /> */}
            {!true ? <>

                {/* <Stack.Screen
                    name="Root"
                    component={Root}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen name='CommingSoon' component={CommingSoon} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                <Stack.Screen name={"Menu"} component={Menu}
                    options={{ presentation: "modal", animation: "slide_from_left" }} />
                
            </>
                :
                <>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Otp' component={Otp} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Welcome' component={Welcome} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Profile' component={Profile} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Bio' component={Bio} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Chatscreen' component={Chatscreen} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Myqueue' component={Myqueue} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Trychat' component={Trychat} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Gender' component={Gender} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name='Queue' component={Queue} options={{ presentation: "fullScreenModal", animation: "slide_from_right", headerShown: false }} />
                    <Stack.Screen name='Rewards' component={Rewards} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    {/* <Stack.Screen
                        name="Root"
                        component={Root}
                        options={{ headerShown: false }}
                    /> */}
                    <Stack.Screen name='CommingSoon' component={CommingSoon} options={{ presentation: "fullScreenModal", animation: "slide_from_right" }} />
                    <Stack.Screen name={"Menu"} component={Menu}
                        options={{ presentation: "modal", animation: "slide_from_left" }} />
                    <Stack.Screen name={"Home"} component={Home}
                        options={{ presentation: "modal", animation: "slide_from_left" }} />
                </>}
        </Stack.Navigator>



    );
};

export default Routes