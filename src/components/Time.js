import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

const getHour = (val) => {
  if (val > 12 && val < 24) {
    
    return val - 12 + ' PM';
  }

  if( val === 12){
    return val + ' PM';
  }

  if( val === 24){
    return 12 + ' AM';
  }

  return val + ' AM';
};

const Time = ({item, active}) => {
  const hour = getHour(item.item);
  return (
    <View>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 30,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: active ? '#4b6cb7' : 'rgba(0,0,0,0.4)',
            fontWeight: active ? 'bold' : 'normal',
          }}>
          {hour}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
            flex: 1,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
      {item.item === 1 ? (
        <View
          style={{
            marginLeft: 50,
            paddingLeft: 10,
            borderLeftWidth: 4,
            borderLeftColor: '#4b6cb7',
            height: 40,
            justifyContent: 'center',
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 1,
            backgroundColor: 'white',
            display: 'flex',
            marginBottom: -20,
          }}>
          <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.4)'}}>
            {item.item} AM - {item.item + 1} AM
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default Time;
