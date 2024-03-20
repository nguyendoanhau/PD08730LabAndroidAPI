import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Time from './src/components/Time';
import Bai2 from './src/screens/Lab1/Bai2';
import Student from './src/components/Student';
import Header from './src/components/Header/Header';
import Main from './src/conponents/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Main/>
       {/* <Bai2/> */}
      {/* <Student name="HậuND1" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND2" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND3" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND4" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND5" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND6" address="Hà Tĩnh" phone="0868876864"/>
      <Student name="HậuND7" address="Hà Tĩnh" phone="0868876864"/> */}
      <StatusBar style="auto" />
    </View>
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
