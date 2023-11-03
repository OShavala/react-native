import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
} from 'react-native';
import { ImagePicker } from 'expo-image-picker';
import backgroundImage from '../../assets/images/background.png';
import { Feather } from '@expo/vector-icons';

export const ProfileScreen = ({ route, navigation }) => {
  const [userPost, setUserPost] = useState([]);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
   
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
   
    const userPosts = await fetchUserPosts(); 
    setUserPost(userPosts);
  };

  const signOut = () => {
   
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      
      const photoURL = await uploadAvatarToServer(result.uri);

   
      updateAvatar(photoURL);
    } else {
      alert('You did not select any image.');
    }
  };

 
  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={{ position: 'absolute', width: width, height: height }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -165 : -165}
        >
          <View style={styles.profileContainer}>
            <View style={styles.infoUserThumb}>
              
              <Text style={styles.infoUserName}>Username</Text>
              <TouchableOpacity style={{ marginTop: 22 }} onPress={signOut}>
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  profileContainer: {
    height: '85%',
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  infoUserThumb: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  infoUserName: {
    width: '100%',
    marginTop: 92,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    textAlign: 'center',
    color: '#212121',
  },
});


