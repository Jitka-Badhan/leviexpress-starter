import React from 'react';
import { BusStop } from '../BusStop';

import './style.css';

export const JourneyDetail = ({journey}) => {
  const stops = journey.stops;

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {stops.map(stop => <BusStop key={stop.code} name={stop.name} station={stop.station} time={stop.time}/>)}
      </div>
    </div>
  )
}

