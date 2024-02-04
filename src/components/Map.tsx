"use client"
import * as React from 'react';
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import data from '@/data/test.json';

interface Feature {
  geometry: {
    coordinates: [number, number];
  };
  // Add other properties based on your actual JSON structure
}

interface Data {
  features: Feature[];
  // Add other properties based on your actual JSON structure
}

export default function App() {
  return (
    <Map
      initialViewState={{
        longitude: 100.523186,
        latitude: 13.736717,
        zoom: 6,
        pitch: 0,
        bearing: 0,
      }}
      style={{ width: "100%", height: "100vh", background: "aliceblue" }}
      mapStyle="\map.json"
      maxPitch={85}
    >
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {Object.entries(data).map(([key, value])=> {
        const [
          hexcode,
          latitude,
          longitude,
          heading,
          altitude,
          speed,
          ,
          ,
          aircraft_type,
          registration_number,
          ,
          origin,
          destination,
          flight_number,
          ,
          vertical_speed,
          call_sign,
          ,
          airline
      ] = value;
        return (
          <Marker
            key={key}
            longitude={Number(value[2])}
            latitude={Number(value[1])}
            anchor="bottom"
          >
            <div>📍</div>
          </Marker>
        );
      }
      )}
    </Map>
  );
}
