import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Container, Spinner} from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {THEME} from '../constants';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  });

  return (
    <Container style={styles.container}>
      <StatusBar
          hidden={false}
          translucent={true}
          barStyle="light-content"
          backgroundColor="transparent"
        />
      <View style={styles.content}>
        <IconM
          name="camera-timer"
          size={60}
          color={THEME.bgPrimary}
          style={styles.icon}
        />
        <Spinner color={THEME.bgPrimary} size={18} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.primary,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    marginBottom: -20,
  },
});

export default Splash;
