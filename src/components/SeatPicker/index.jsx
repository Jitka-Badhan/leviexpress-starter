import React from 'react';
import { SeatRow } from '../SeatRow';

import './style.css';

export const SeatPicker = ({journey}) => {
  const seats = journey.seats;

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map( 
          (row, index) => <SeatRow key={index} row={row} />
        )}
      </div>
      <button className="btn" type="button">Rezervovat</button>
    </div>
  )
}