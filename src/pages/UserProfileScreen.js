import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const UserProfileScreen = ({ navigation, route }) => {
 
  const { member } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Member Profile</Title>
          <Paragraph style={styles.text}>Name: {member.name}</Paragraph>
          <Paragraph style={styles.text}>Email: {member.email}</Paragraph>
          <Paragraph style={styles.text}>Phone: {member.phone}</Paragraph>
          {/* <Paragraph style={styles.text}>Address: {user.address}</Paragraph> */}
        </Card.Content>
        <Card.Actions>
          {/* 회원 정보 편집 화면으로 이동 */}
          <Button onPress={() => navigation.navigate('EditProfile')}>Edit Profile</Button>
        </Card.Actions>
      </Card>
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
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default UserProfileScreen;