import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Time from '../components/Time';

const TimeList = ({today, date}) => {
  let data = [];
  let currentHour = date.getHours();
  if(currentHour === 0){
      currentHour = 24;
  }
  React.useEffect(() => {
    for (let i = currentHour; i <= 24; i++) {
      data.push(i);
      if (i === 24) {
        i = 0;
      }
      if (i === currentHour - 1) {
        i = 25;
      }
    }
    console.log(data)
  });
  return (
    <FlatList
      style={{padding: 15, backgroundColor: 'white', marginTop: -20}}
      ListFooterComponent={<View style={{margin: 60}} />}
      data={data}
      keyExtractor={(item) => item.toString()}
      renderItem={(item) => {
        return <Time item={item} active={item.item === currentHour && today} />;
      }}
    />
  );
};

export default TimeList;
