import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamtpdHNhbyIsImEiOiJja2QwMWFvcnYwcDk2MzBsN3p4bXZmbzA1In0.yCKFXODdTQSRykFb60p4jg';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 8,
      maxZoom: 15,
      center: [36.8219, 1.2921],
      mapStyle:"mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
    });

    // Add marker
    const marker = new mapboxgl.Marker({
      // draggable: true
    })
      .setLngLat([36.8304, 1.2781])
      .addTo(map);
      

    const onDragEnd = () => {
      const lngLat = marker.getLngLat();
      console.log('lng: ' + lngLat.lng + '<br />lat: ' + lngLat.lat);
    };

    // Add navigation conrol

    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '90vw', height: '70vh', marginRight: '50px'}}>
      <div ref={mapContainerRef} style={{ height: '100%' }} />
    </div>
  );
};

export default Map;

