import React from 'react';
import {Text} from 'native-base';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {THEME} from '../constants';

const getHour = (val) => {
  if (val > 12 && val < 24) {
    return val - 12 + ' PM';
  }
  if (val === 12) {
    return val + ' PM';
  }
  if (val === 24) {
    return 12 + ' AM';
  }
  if (val === 25) {
    return 1 + ' AM';
  }
  return val + ' AM';
};

const Time = ({item, active}) => {
  const [show, setShow] = React.useState(false);
  const hour = getHour(item.item);
  return (
    <View>
      <TouchableOpacity
        style={styles.wrapper}
        onPress={() => {
          setShow(!show);
        }}>
        <Text
          style={[
            styles.hour,
            {
              color: active ? THEME.primary : THEME.secondary,
              fontWeight: active ? 'bold' : 'normal',
            },
          ]}>
          {hour}
        </Text>
        <View style={styles.line} />
      </TouchableOpacity>
      {show ? (
        <View style={styles.card}>
          <Text style={styles.textCard}>
            {hour} - {getHour(item.item + 1)}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  hour: {
    fontSize: 12,
  },
  line: {
    height: 1,
    backgroundColor: THEME.line,
    flex: 1,
    marginLeft: 10,
  },
  card: {
    marginLeft: 50,
    paddingLeft: 10,
    borderLeftWidth: 4,
    borderLeftColor: THEME.primary,
    height: 40,
    justifyContent: 'center',
    borderBottomColor: THEME.line,
    borderBottomWidth: 1,
    backgroundColor: THEME.bgPrimary,
    display: 'flex',
    marginBottom: -20,
  },
  textCard: {
    fontSize: 14,
    color: THEME.secondary,
  },
});

export default Time;
