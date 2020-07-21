import React from 'react';
import {Container} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';
import {MAP, THEME} from '../constants';

import ButtonBottom from '../components/ButtonBottom';

const Map = ({navigation}) => {
  return (
    <Container>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={MAP.region}>
        <Polyline
          coordinates={MAP.polyline}
          strokeColor={THEME.primary}// fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={6}
        />
        <Marker coordinate={{latitude: -7.135441, longitude: 108.269385}}>
          <Image
            source={{
              uri:
                'https://gravatar.com/avatar/0f2773d6a6f4fdca04a038fbbf3cbb25?s=200&d=robohash&r=x',
            }}
            style={{height: 40, width: 40}}
          />
          
        </Marker>
        <Marker coordinate={{latitude: -7.130804, longitude:  108.266315}} />
      </MapView>
      <ButtonBottom
        title={'Back'}
        action={() => {
          navigation.navigate('Home');
        }}
      />
    </Container>
  );
};

export default Map;
