import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const changeJourney = (dataFromForm) => {
    setJourney(dataFromForm);
  };
  
  return (
    <main>
      <JourneyPicker onJourneyChange={changeJourney}/>
      {journey ? <p>Nalezeno spojení s id {journey.journeyId}</p> : null}
    </main>
  )
};
