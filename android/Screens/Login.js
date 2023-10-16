import React from 'react';
import {
    TextInput,
    
    Text,
    View,
    Button,
    Image, Alert,
  } from 'react-native';
  import Stylesheet from './Config.js/Stylesheet';
  
function Login({navigation}) {

    const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleSubmit = () => {
    var emailValid = false;
    if (email.length == 0) {
      setEmailError("Email is required");
    }
    else if (!email.includes('@gmail')) {
      setEmailError("Invalid  Username Email");

    }
    else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    }

    else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    }
    else {
      setEmailError("")
      emailValid = true
    }

    var passwordValid = false;
    if (password.length == 0) {
      setPasswordError("Password is required");
    }
    else if (password.length < 6) {
      setPasswordError("Password should be minimum 6 characters");
    }
    else if (password.indexOf(' ') >= 0) {
      setPasswordError('Password cannot contain spaces');
    }
    else {
      setPasswordError("")
      passwordValid = true
    }

    if (emailValid && passwordValid) {
      Alert.alert('Email: ' + email + '\nPassword: ' + password);
      setEmail("");
      setPassword("");
       navigation.navigate('home', {
            paramKey: email,parampassword: password,
          })

    }
  }
    return (
        <View style={Stylesheet.container}>
      <View style={{ alignItems: 'center' }} >
        <Image 
          source={require('LoginScreen/android/assets/logoimage.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Text style={Stylesheet.title}>Login</Text>
      <View>
        <Image
          source={require('LoginScreen/android/assets/username.png')}
          style={Stylesheet.logoimageStyle}

        />
        <TextInput
          style={Stylesheet.input}
          placeholder="Email or Username"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />
        {emailError.length > 0 &&
          <Text style={{ color: 'red' }}>{emailError}</Text>
        }
      </View>
      <View>
        <Image
          source={require('LoginScreen/android/assets/password.png')}
          style={Stylesheet.logoimageStyle}
        />
        <TextInput
          style={Stylesheet.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />
        {passwordError.length > 0 &&

          <Text style={{ color: 'red' }}>{passwordError}</Text>
        }
      </View>
      <Text style={Stylesheet.forgotPassword}>Forgot your password?</Text>

      <Button
        title="Login"
        onPress={handleSubmit}
      />

    </View>
    );
}

export default Login;