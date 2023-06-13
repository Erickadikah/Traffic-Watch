import React from 'react'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamtpdHNhbyIsImEiOiJja2QwMWFvcnYwcDk2MzBsN3p4bXZmbzA1In0.yCKFXODdTQSRykFb60p4jg'
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 8,
      center: [ 36.8219,1.2921]
    });
      //add marker
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([36.937984,-1.359227])
        .addTo(map),
        onDragEnd = () => {
            const lngLat = marker.getLngLat();
            console.log('lng: ' + lngLat.lng + '<br />lat: ' + lngLat.lat);
        }

    //add navigation control
  return () => map.remove();
}, []);
  
    return (
    <div className="mt-50" ref={mapContainerRef}  style={{ width: '100vw', height: '70vh', marginBottom: '90px'}}/>);
  }

export default Map
