import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';

import ListProfileScreen from './src/pages/ListProfileScreen';  // 회원 정보 리스트
import UserProfileScreen from './src/pages/UserProfileScreen';  // 회원 정보 보기 화면
import EditProfileScreen from './src/pages/EditProfileScreen';  // 회원 정보 편집 화면

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ListProfile">
         <Stack.Screen
            name="ListProfile"
            component={ListProfileScreen}
            options={{}}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;