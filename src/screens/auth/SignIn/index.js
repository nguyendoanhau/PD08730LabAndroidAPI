import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';
import {styles} from './styles';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onBack = () => {
    navigation.goBack();
  };
  const handleSignIn = () => {
    // Kiểm tra điều kiện đăng nhập
    if (email === '' || password === '') {
      setError('Please enter email and password');
      return;
    }
    navigation.navigate('Crud'); 

    // Xử lý quá trình đăng nhập
    // Logic xác thực người dùng và điều hướng đến màn hình tiếp theo
  };
  
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In"onBackPress={onBack} />

      <Input label="E-mail" placeholder="example@gmail.com"  value={email}
        onChangeText={setEmail} />
      <Input isPassword label="Password" placeholder="*******" value={password}
        onChangeText={setPassword}/>

      {/* <Button style={styles.button} title="Sign In" /> */}
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <Button onPress={handleSignIn} title="Sign In" />
      <Seperator text="Or sign in with" />

      <GoogleLogin />

      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp} style={styles.footerLink}>
          {' '}
          Sign Up
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(SignIn);