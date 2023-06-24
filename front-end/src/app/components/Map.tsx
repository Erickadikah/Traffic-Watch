import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl-traffic/dist/mapbox-gl-traffic.css';
import MapboxTraffic from 'mapbox-gl-traffic';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamtpdHNhbyIsImEiOiJja2QwMWFvcnYwcDk2MzBsN3p4bXZmbzA1In0.yCKFXODdTQSRykFb60p4jg';

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/traffic-night-v2',
      zoom: 10,
      maxZoom: 15,
      center: [36.8219, 1.2921],
    });

    // Add traffic layer
    const trafficLayer = new MapboxTraffic({
      colorScale: [
        '#00ff00', // green low congestion or no traffic
        '#ffff00', // yellow medium congestion
        '#ff0000'  // red high congestion
      ],
      lineWidth: 2, // The width of the lines in the traffic layer
    });
    map.addControl(new MapboxTraffic(), 'top-left');

    // Add markers
    const markers = [
      {
        lngLat: [36.8219, 1.2921], // Nairobi coordinates
        locationName: 'Nairobi', // Name of the location
      },
      {
        lngLat: [39.6682, 4.0435], // Mombasa coordinates
        locationName: 'Mombasa', // Name of the location
      },
    ];

    markers.forEach((markerData) => {
      const marker = new mapboxgl.Marker().setLngLat(markerData.lngLat).addTo(map);

      // Create popup
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      }).setHTML(`<h3>${markerData.locationName}</h3>`);

      // Show popup on marker hover
      marker.getElement().addEventListener('mouseenter', () => {
        marker.setPopup(popup).togglePopup();
        marker.getElement().classList.add('hovered-marker');
      });

      // Hide popup on marker leave
      marker.getElement().addEventListener('mouseleave', () => {
        marker.togglePopup();
        marker.getElement().classList.remove('hovered-marker');
      });
    });

    // Navigation control for zooming in and out
    const navigationControl = new mapboxgl.NavigationControl();
    map.addControl(navigationControl, 'top-right');

    // Event listener for retrieving features on click
    map.on('click', (e) => {
      const features = map.queryRenderedFeatures(e.point);
      console.log(features);
    });

    return () => map.remove();
  }, []);

  return (
    <div style={{ width: '50vw', height: '90vh', marginRight: '25px' }}>
      <div ref={mapContainerRef} style={{ height: '100%' }} />
      <style>
        {`
          .hovered-marker {
            height: 50px;
            width: 100px;
            transform: scale(1.2);
            transition: transform 0.2s ease;
            background-color: white;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default Map;

