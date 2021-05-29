import React, { useState } from 'react';
import { SeatRow } from '../SeatRow';

import './style.css';

export const SeatPicker = ({journey}) => {
  const seats = journey.seats;

  const [selectedSeatNumber, setSelectedSeatNumber] = useState(null);

  const handleSeatSelect = (numberSeatSelected) => {
    setSelectedSeatNumber(numberSeatSelected);
  }

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map( 
          (row, index) => <SeatRow key={index} row={row} onSeatSelected={handleSeatSelect} selectedSeatNumber={selectedSeatNumber}/>
        )}
      </div>
      <button className="btn" type="button">Rezervovat</button>
    </div>
  )
}