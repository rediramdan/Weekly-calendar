import React from 'react';
import {Text, Tabs, Tab, ScrollableTab} from 'native-base';
import {View, StyleSheet} from 'react-native';
import {DATE, THEME} from '../constants';

import TimeList from '../components/TimeList';

const getDay = (key) => {
  const {day} = DATE;
  return day[key];
};

const getMonth = (key) => {
  const {month} = DATE;
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
          <View style={styles.wrapper}>
            <Text>{i === 0 ? 'Today ' : getDay(thisDate.getDay())}</Text>
            <Text style={styles.text}>
              {i === 0 ? getDay(date.getDay()) + ', ' : null}{' '}
              {thisDate.getDate()} {getMonth(thisDate.getMonth())}{' '}
              {i !== 0 ? thisDate.getFullYear() : null}
            </Text>
          </View>
        }>
        <TimeList today={i === 0} date={date} />
      </Tab>,
    );
  }

  return (
    <Tabs renderTabBar={() => <ScrollableTab style={styles.height} />}>
      {TabList}
    </Tabs>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: THEME.primary,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  height: {
    height: 80,
  },
});

export default TabView;
