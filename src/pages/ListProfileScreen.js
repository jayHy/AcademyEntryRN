import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';
import { SContainer } from '../components/Base';
import { MyAppBar } from '../components/Appbar';

// 샘플 회원 정보 데이터
const members = [
  { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901' },
  { id: '3', name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: '345-678-9012' },
  { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com', phone: '456-789-0123' },
];

// 회원 리스트 페이지
const ListProfileScreen = ({ navigation }) => {
    // 회원 리스트 아이템 렌더링 함수
    const renderMemberItem = ({ item }) => (
      <Card style={styles.card} onPress={() => navigation.navigate('UserProfile', { member: item })}>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.email}</Paragraph>
          <Paragraph>{item.phone}</Paragraph>
        </Card.Content>
      </Card>
    );
  
    return (
      <SContainer>
        {/* <MyAppBar/> */}
        <FlatList
          data={members}
          renderItem={renderMemberItem}
          keyExtractor={(item) => item.id}
        />
      </SContainer>
    );
  };

  // 스타일 정의
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 16,
    },
    card: {
      marginBottom: 10,
    },
  });

export default ListProfileScreen;