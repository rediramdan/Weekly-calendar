import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';

const ButtonBottom = ({title, action, bgColor}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: bgColor,
        paddingHorizontal: 40,
        justifyContent: 'center',
      }}>
      <Button
        style={{
          justifyContent: 'center',
          backgroundColor: '#4b6cb7',
          borderRadius: 30,
        }}
        onPress={action}>
        <Text uppercase={false}>{title}</Text>
      </Button>
    </View>
  );
};

export default ButtonBottom;
