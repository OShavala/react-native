import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import backgroundImage from '../../assets/images/background.png';

export const LoginScreen = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [isHidePassword, setIsHidePassword] = useState(true);

  const handleInputFocus = (input) => {
    setFocusedInput(input);
  };
  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleHidePassword = () => {
    setIsHidePassword(!isHidePassword);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -230 : -235}
      >
        <ImageBackground
          style={styles.imageBackground}
          source={backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Увійти</Text>
            <View style={styles.inputThumb}>
              <TextInput
                style={[
                  styles.formInput,
                  focusedInput === 'email' && styles.focusedFormInput,
                ]}
                placeholder="Адреса електронної пошти"
                textContentType="emailAddress"
                keyboardType="email-address"
                onFocus={() => handleInputFocus('email')}
                onBlur={handleInputBlur}
              />

              <View style={styles.passwordContainer}>
                <TextInput
                  style={[
                    styles.formInput,
                    focusedInput === 'password' && styles.focusedFormInput,
                  ]}
                  placeholder="Пароль"
                  textContentType="password"
                  secureTextEntry={isHidePassword}
                  onFocus={() => handleInputFocus('password')}
                  onBlur={handleInputBlur}
                />
                <TouchableOpacity
                  style={styles.passwordButton}
                  onPress={handleHidePassword}
                >
                  <Text style={styles.passwordButtonText}>
                    {isHidePassword ? 'Показати' : 'Приховати'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Увійти</Text>
            </TouchableOpacity>
             <TouchableOpacity>
              <Text style={styles.textLogin}>
                Немає акаунту?{' '}
                <Text style={styles.registrationText}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  formContainer: {
    paddingTop: 32,
    paddingBottom: 144,
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#FFFFFF',
  },

  formTitle: {
    marginBottom: 32,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
  },

  inputThumb: {
    marginBottom: 32,
    gap: 16,
  },

  formInput: {
    padding: 15,
    height: 50,
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: '#F6F6F6',
  },

  focusedFormInput: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  },

  passwordContainer: {
    position: 'relative',
  },

  passwordButton: {
    position: 'absolute',
    top: 15,
    right: 12,
  },

  passwordButtonText: {
    fontSize: 16,
    color: '#1B4371',
  },

  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },

  buttonTitle: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
  },

  textLogin: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },

  registrationText: {
    textDecorationLine: 'underline',
  },
});

