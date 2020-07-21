import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {THEME} from '../constants';

import Time from '../components/Time';

const TimeList = ({today, date}) => {
  let data = [];
  let currentHour = date.getHours();
  if (currentHour === 0) {
    currentHour = 24;
  }
  let start = today ? currentHour : 6;
  React.useEffect(() => {
    for (let i = start; i <= 24; i++) {
      data.push(i);
      if (i === 24) {
        i = 0;
      }
      if (i === start - 1) {
        i = 25;
      }
    }
  });
  return (
    <FlatList
      style={styles.wrapper}
      ListFooterComponent={<View style={styles.margin} />}
      data={data}
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => {
        return <Time item={item} active={item.item === currentHour && today} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: THEME.bgPrimary,
    marginTop: -20,
  },
  margin: {
    margin: 60,
  },
});

export default TimeList;
