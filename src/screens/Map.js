import React from 'react';
import {Container} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Polyline, Marker} from 'react-native-maps';

import ButtonBottom from '../components/ButtonBottom';

const Map = ({navigation}) => {
  return (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={StyleSheet.absoluteFillObject}
        region={{
          latitude: -7.133725,
          longitude: 108.267848,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        <Polyline
          coordinates={[
            {latitude: -7.135441, longitude: 108.269385},
            {latitude: -7.135074, longitude: 108.267008},
            {latitude: -7.133746, longitude: 108.267236},
            {latitude: -7.133306, longitude: 108.267332},
            {latitude: -7.133073, longitude: 108.267489},
            {latitude: -7.132954, longitude: 108.267499},
            {latitude: -7.132830, longitude: 108.267510},
            {latitude: -7.132665, longitude: 108.267417},
            {latitude: -7.132161, longitude: 108.266973},
            {latitude: -7.132065, longitude: 108.266618},
            {latitude: -7.131899, longitude:  108.266375},
            {latitude: -7.131611, longitude:  108.266175},
            {latitude: -7.130965, longitude:  108.265999},
            {latitude: -7.130804, longitude:  108.266315},
             
          ]}
          strokeColor="#4b6cb7" // fallback for when `strokeColors` is not supported by the map-provider
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
