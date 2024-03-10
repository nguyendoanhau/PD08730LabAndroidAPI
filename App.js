import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Time from './src/components/Time';

import Student from './src/components/Student';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
       <Header
        title="Header"
        iconLeft={require('./assets/back.png')}
        iconLeftColor="white"
        
        leftIconSize={24}
        centerComponent={
          <View style={styles.customCenterComponent}>
            {/* Thay thế với nội dung bạn muốn hiển thị ở giữa */}
          </View>
        }
        rightComponent={
          <View style={styles.customRightComponent}>
            {/* Thay thế với nội dung bạn muốn hiển thị ở bên phải */}
          </View>
        }
        iconRight={require('./asset/tabs/profile_active.png')}
        
        rightIconSize={24}
      />
      <Header title="Trang chu"/>
      <Header/>
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
