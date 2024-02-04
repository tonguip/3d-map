"use client"
import * as React from 'react';
import Map, { FullscreenControl, GeolocateControl, Marker, NavigationControl, ScaleControl } from 'react-map-gl/maplibre';
import data from '@/data/test.json';
import Image from 'next/image';

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
      // maxPitch={85}
    >
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
      {Object.entries(data).map(([key, value])=> {
        return (
          <Marker
            key={key}
            style={{ height : `${value[5] as number /2}px`}}
            longitude={Number(value[2])}
            latitude={Number(value[1])}
            anchor="bottom"
          >
            {/* <div>📍</div> */}
            <Image src="/images/UNK_AIR.png" alt="Marker" width={12} height={12} />
          </Marker>
        );
      }
      )}
    </Map>
  );
}
