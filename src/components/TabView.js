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

import TimeList from '../components/TimeList';
const getDay = (key) => {
  const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return day[key];
};

const getMonth = (key) => {
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return month[key];
};
const TabView = () => {
  var date = new Date();
  let TabList = [];
  for (let i = 0; i < 7; i++) {
    var thisDate = new Date(date.getTime() + 86400000 * i);
    TabList.push(
      <Tab
        key={i}
        heading={
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              backgroundColor: '#4b6cb7',
            }}>
            <Text>{i === 0 ? 'Today ' : getDay(thisDate.getDay())}</Text>
            <Text style={{fontSize: 12, marginBottom: 10}}>
              {i === 0 ? getDay(date.getDay()) + ', ' : null}{' '}
              {thisDate.getDate()} {getMonth(thisDate.getMonth())}{' '}
              {i !== 0 ?thisDate.getFullYear():null}
            </Text>
          </View>
        }>
        <TimeList today={i===0} date={date} />
      </Tab>
    );
  }

  return (
    <Tabs renderTabBar={() => <ScrollableTab style={{height: 80}} />}>
      {TabList}
    </Tabs>
  );
};

export default TabView;
