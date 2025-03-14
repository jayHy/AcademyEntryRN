import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Title, Paragraph, Text} from 'react-native-paper';
import { SafeContainer, VContent } from '../components/Base';

const { width, height } = Dimensions.get('window');

const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

// 샘플 회원 정보 데이터
const members = [
  { id: '1', name: 'a', status: '상태' },
  { id: '2', name: 'b', status: '상태' },
  { id: '3', name: 'c', status: '상태' },
  { id: '4', name: 'd', status: '상태' }
];

const members22 = [
  { id: '5', name: '1', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: '6', name: '2', email: 'jane.smith@example.com', phone: '234-567-8901' },
  { id: '7', name: '3', email: 'michael.johnson@example.com', phone: '345-678-9012' },
  { id: '8', name: '4', email: 'emily.davis@example.com', phone: '456-789-0123' }
];

const renderMemberItem = ({ item }) => (
  <Card style={styles.card} onPress={() => navigation.navigate('UserProfile', { member: item })}>
    <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>{item.email}</Paragraph>
      <Paragraph>{item.phone}</Paragraph>
    </Card.Content>
  </Card>
);

const StudentViewScreen = ({navigation}) => {
  return (
    <SafeContainer>
      <VContent>
          <Card style={styles.section}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.grid}>
                {members.map((item, index) => (
                  <Card key={index} style={styles.card} onPress={() => navigation.navigate('UserProfile', { member: item })}>
                    <Card.Content>
                      <Title>{item.name}</Title>
                      <Text>{item.status}</Text>
                    
                   </Card.Content>
                 </Card>
                    // renderMemberItem(item)
                  // <Card key={index} style={styles.card}>
                  //   <Card.Content>
                  //     <Text>{item.name}</Text>
                  //   </Card.Content>
                  // </Card>
              ))}
              </View>
            </ScrollView>
          </Card>
          <View style={styles.section}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.grid}>
                {members22.map((item, index) => (
                  <Card key={index} style={styles.card}>
                    <Card.Content>
                      <Text>{item.name}</Text>
                    </Card.Content>
                  </Card>
              ))}
              </View>
            </ScrollView>
          </View>
       </VContent>
    </SafeContainer>
   
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    // justifyContent: 'center',
  
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: width / 4,
    margin: 10,
  },
  section: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default StudentViewScreen;