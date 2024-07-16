import React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 49.2502266,
    longitude: -122.8979963,
    zoom: 10,
  });

  return (
    <>
      <div className='map'>
        <ReactMapGL
          mapboxApiAccessToken='pk.eyJ1IjoiYmF5YXppZGgiLCJhIjoiY2tvemdwc3ByMDg1YzJubzQxcDR0cDR3dyJ9.s1zXEb5OPqgBDcmupj3GBA'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
      {/* End map */}
    </>
  );
};

export default Map;
