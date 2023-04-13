import React, { useEffect } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import * as L from 'leaflet';
import { useMap } from 'react-leaflet';
import Control from 'react-leaflet-custom-control';
import { LegendDrawerButton } from './Legend';
import { useMapLayerStore } from '../data/Questions';

const basemap = L.tileLayer("http://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}");

export const MapData = ({ question }) => {
  const map = useMap();
  const layers = useMapLayerStore((state) => state.layers);
  const setLayerData = useMapLayerStore((state) => state.setLayerData);
  const setQuestionLayersActive = useMapLayerStore(
    (state) => state.setQuestionLayersActive
  );

  // Effect adds all active layers to the map, fetching their data in necessary.
  useEffect(() => {
    // Add Satellite Basemap
    if (!map.hasLayer(basemap)) map.addLayer(basemap);
    
    layers.forEach((el, key) => {
      if (el.active) {
        if (el.layer instanceof L.Layer) {
          map.addLayer(el.layer);
        } else if (el.layer === undefined) {
          setLayerData(key, 'loading');
          fetch(el.data)
            .then((response) => response.json())
            .then((geoJSON) => {
              const mapLayer = L.geoJSON(
                geoJSON,
                layers.get(key).options,
              );
              setLayerData(key, mapLayer);
            });
        }
      }
    });

    return () => {
      layers.forEach(el => {
        if (el.layer instanceof L.Layer) map.removeLayer(el.layer);
      });
    };
  }, [map, layers, setLayerData]);

  // Effect on Question change sets all child layers active, 
  // deactivates all others.
  useEffect(() => setQuestionLayersActive(question),
    [question, setQuestionLayersActive]);

  const smallDisplay = useBreakpointValue({
    lg: false,
    base: true,
  }, {ssr:false, fallback:true});

  // Render Legend Control on small displays.
  return (
    <>{
      smallDisplay ? (
        <Control position='topright'>
          <LegendDrawerButton activeQuestion={question} />
        </Control>
      ) : null
    }</>
  );
}