import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onBack = () => {
    navigation.goBack();
  };
  const handleSignUp = () => {
    // Kiểm tra điều kiện đăng ký
    if (name === '' || email === '' || password === '' || !checked) {
      setError('Please enter email and password');
      return;
    }
    navigation.navigate('SignIn'); 
    // Xử lý quá trình đăng ký
    // Logic gửi thông tin đăng ký đến máy chủ hoặc lưu trữ trong cơ sở dữ liệu
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={onBack} />
      <Input label="Name" placeholder="Example Jonh" value={name} onChangeText={setName} />
      <Input label="Email" placeholder="example@gmail.com" value={email} onChangeText={setEmail}/>
      <Input isPassword label="Password" placeholder="******" value={password} onChangeText={setPassword} />
      <View style={styles.checkRow}>
        <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
        <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
      </View>
      {/* <Button style={styles.button} title="Sign Up"></Button> */}
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <Button onPress={handleSignUp} title="Sign Up" />
      {/* <Button
        onPress={() => navigation.navigate('SignIn')}
        title="Sign Up"></Button>
      */}
      <Seperator text="Or sign up with"></Seperator>
      <GoogleLogin></GoogleLogin>

      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;