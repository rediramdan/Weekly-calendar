import React from 'react';
import {
  Container,
  Header,
  Text,
  Left,
  Right,
  Body,
  Button,
  Title,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

import TabView from '../components/TabView';
import ButtonBottom from '../components/ButtonBottom';

const Home = ({navigation}) => {
  return (
    <Container>
      <Header
        androidStatusBarColor="#4b6cb7"
        style={{backgroundColor: '#4b6cb7'}}>
        <Left style={{paddingLeft: 10}}>
          <IconM name="camera-timer" size={26} color={'white'} />
        </Left>
        <Body>
          <Title style={{marginLeft: -20}}>Weekly Calendar</Title>
        </Body>
        <Right />
      </Header>
      <TabView />
      <ButtonBottom title={'Choose Location'} action={()=>{navigation.navigate('Map')}} bgColor={'#fcfbfb'} />
    </Container>
  );
};

export default Home;
