import React from 'react';
import { Seat } from '../Seat';

export const SeatRow = ({row, onSeatSelected, selectedSeatNumber}) => {

  return (
    <div className="seat-row" >
      {
      row.map( 
        (seat, index) => <Seat key={index} number={seat.number} isOccupied={seat.isOccupied} onSelect={onSeatSelected} isSelected={seat.number === selectedSeatNumber ? true : false}/> )
      }
    </div>
  )
}