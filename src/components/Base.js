import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import styled from 'styled-components';

const SafeContainer = (props) => {
    // StatusBar.setBackgroundColor('#FFFFFF');
    return (
        <SafeAreaView style={{flex: 1}}>
            {props.children}
        </SafeAreaView>
    );
};

// 수직 컨텐츠
const VContent = styled(View)`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
`;

export {
    SafeContainer,
    VContent
}