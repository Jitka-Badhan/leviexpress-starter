import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';
import { JourneyDetail } from '../JourneyDetail';

export const Home = () => {
  const [journey, setJourney] = useState(null);

  const changeJourney = (dataFromForm) => {
    setJourney(dataFromForm);
  };
  
  return (
    <main>
      <JourneyPicker onJourneyChange={changeJourney}/>
      {journey ? <JourneyDetail journey={journey}/> : null}
    </main>
  )
};
