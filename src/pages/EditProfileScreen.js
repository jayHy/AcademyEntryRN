import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Title } from 'react-native-paper';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 Main Street, Springfield, USA');

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Edit Profile</Title>
      
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      
      <Button
        mode="contained"
        onPress={() => {
          // 편집한 내용을 저장하는 로직 (여기서는 단순히 화면을 닫음)
          navigation.goBack(); // 이전 화면으로 돌아가기
        }}
      >
        Save Changes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
});

export default EditProfileScreen;