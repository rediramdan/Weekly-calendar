import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'native-base';
import {THEME} from '../constants';

const ButtonBottom = ({title, action, bgColor}) => {
  return (
    <View style={[styles.wrapper, {backgroundColor: bgColor}]}>
      <Button style={styles.btn} onPress={action}>
        <Text uppercase={false}>{title}</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    backgroundColor: THEME.primary,
    borderRadius: 30,
  },
});

export default ButtonBottom;
