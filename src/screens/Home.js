import React from 'react';
import {Container, Header, Left, Right, Body, Title} from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet} from 'react-native';
import {THEME} from '../constants';

import TabView from '../components/TabView';
import ButtonBottom from '../components/ButtonBottom';

const Home = ({navigation}) => {
  return (
    <Container>
      <Header
        androidStatusBarColor={THEME.primary}
        style={{backgroundColor: THEME.primary}}>
        <Left style={styles.pl}>
          <IconM name="camera-timer" size={26} color={THEME.bgPrimary} />
        </Left>
        <Body>
          <Title style={styles.ml}>Weekly Calendar</Title>
        </Body>
        <Right />
      </Header>
      <TabView />
      <ButtonBottom
        title={'Choose Location'}
        action={() => {
          navigation.navigate('Map');
        }}
        bgColor={THEME.bgSecondary}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  pl: {
    paddingLeft: 10,
  },
  ml: {
    marginLeft: -20,
  },
});

export default Home;
