import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AccLayout, MainLayout} from '../components/layout';
import PickImage from '../components/ui/PickImage';
import {Color} from '../constants/color';

const {width, height} = Dimensions.get('window');
const image_width = width * 0.8;
const image_height = height * 0.3;

const ExplorerScreen = () => {
  const [username, setUsername] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem('username');
      const savedUserPhoto = await AsyncStorage.getItem('userPhoto');
      if (savedUsername) setUsername(savedUsername);
      if (savedUserPhoto) setUserPhoto(savedUserPhoto);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('username', username);
      if (userPhoto) {
        await AsyncStorage.setItem('userPhoto', userPhoto);
      }
      alert('User data saved successfully!');
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to save user data. Please try again.');
    }
  };

  const handleImagePick = images => {
    if (images && images.length > 0) {
      setUserPhoto(images[0]);
    }
  };

  return (
    <AccLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Space Explorer Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.photoContainer}>
          {userPhoto ? (
            <Image source={{uri: userPhoto}} style={styles.photo} />
          ) : (
            <View style={styles.photoPlaceholder} />
          )}
          <PickImage
            style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
            handleImage={handleImagePick}
            btnStyle={styles.pickImageBtn}>
            {userPhoto ? 'Change Photo' : 'Add Photo'}
          </PickImage>
          <TouchableOpacity style={styles.saveButton} onPress={saveUserData}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AccLayout>
  );
};

export default ExplorerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    // backgroundColor: '#0c1445',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 3,
    borderColor:Color.tabIconBg
  },
  photoContainer: {
    alignItems: 'center',
  },
  photo: {
    width: image_width,
    height: image_height,
    borderRadius: 75,
    marginBottom: 10,
  },
  photoPlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#2c3e50',
    marginBottom: 10,
  },
  pickImageBtn: {
    // backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: Color.tabIconBg,
    width: 200,
  },
  saveButton: {
    // backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: Color.tabIconBg,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    fontSize: 20,
    width: 150,
    textAlign: 'center',
  },
});
