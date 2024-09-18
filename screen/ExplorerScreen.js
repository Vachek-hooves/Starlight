import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {AccLayout, MainLayout} from '../components/layout';
import PickImage from '../components/ui/PickImage';

const ExplorerScreen = () => {
  const [username, setUsername] = useState('');
  const [userPhoto, setUserPhoto] = useState(null);

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
            handleImage={handleImagePick}
            btnStyle={styles.pickImageBtn}>
            {userPhoto ? 'Change Photo' : 'Add Photo'}
          </PickImage>
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
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  photoContainer: {
    alignItems: 'center',
  },
  photo: {
    width: 150,
    height: 150,
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
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
