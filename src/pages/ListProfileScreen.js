import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';
import { SafeContainer, VContent } from '../components/Base';
import { MyAppBar } from '../components/Appbar';

const { width, height } = Dimensions.get('window');

// 샘플 회원 정보 데이터
const members = [
  { id: '1', name: '김재현', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: '2', name: '손지은', email: 'jane.smith@example.com', phone: '234-567-8901' },
  { id: '3', name: '손지석', email: 'michael.johnson@example.com', phone: '345-678-9012' },
  { id: '4', name: '김재선', email: 'emily.davis@example.com', phone: '456-789-0123' }
];

const members22 = [
  { id: '5', name: '김수영', email: 'john.doe@example.com', phone: '123-456-7890' },
  { id: '6', name: '정옥순', email: 'jane.smith@example.com', phone: '234-567-8901' },
  { id: '7', name: '손영준', email: 'michael.johnson@example.com', phone: '345-678-9012' },
  { id: '8', name: '하미리', email: 'emily.davis@example.com', phone: '456-789-0123' }
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
      <SafeContainer>
        <VContent>
          <View style={styles.section}>
            <FlatList
              data={members}
              renderItem={renderMemberItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.section}>
            <FlatList
              data={members22}
              renderItem={renderMemberItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </VContent>
      </SafeContainer>
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
      section: {
        height: height / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
      },
  });

export default ListProfileScreen;