import React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const MyAppBar = ({ navigation }) => {
  const _goBack = () => console.log('Went back');
  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="My App" subtitle="Welcome to the app" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MyAppBar;