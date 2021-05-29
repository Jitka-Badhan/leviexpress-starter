import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { SeatRow } from '../SeatRow';

import './style.css';

export const SeatPicker = ({journey}) => {
  const seats = journey.seats;

  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (numberSeatSelected) => {
    setSelectedSeatNumber(numberSeatSelected);
  }

  let history = useHistory();

  const handleBuy = () => {
    
    fetch('https://leviexpress-backend.herokuapp.com/api/reserve', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        seat: selectedSeatNumber,
        journeyId: journey.journeyId,
      }),
    })
    .then(response => response.json())
    .then(json => {
      history.push(`/reservation/${json.data.reservationId}`);
    })

  }

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map( 
          (row, index) => <SeatRow key={index} row={row} onSeatSelected={handleSeatSelect} selectedSeatNumber={selectedSeatNumber}/>
        )}
      </div>
      <button className="btn" type="button" onClick={handleBuy} disabled={selectedSeatNumber ? false : true}>Rezervovat</button>
    </div>
  )
}