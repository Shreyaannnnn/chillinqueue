import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import Routes from './src/navigation/Routes';
import { NavigationContainer } from "@react-navigation/native";


export default function App() {

  
  return (
    <>
      <NavigationContainer>
        {/* {fontLoaded
         &&  */}
        <Routes />
        {/* } */}
        {/* <ConnectWallet /> */}
        {/* <NftInformation/> */}
        {/* <Explore /> */}
        {/* <StatusBar style="auto" hidden /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
