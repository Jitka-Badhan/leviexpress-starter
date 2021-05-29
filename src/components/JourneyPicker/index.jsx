import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

const CityOptions = ({cities}) => (
    <>
      <option value="">Vyberte</option>
      { cities.map(
        city => <option key={city.code} value={city.code}>{city.name}</option>)
      }
    </>
  )

const DateOptions = ({dates}) => (
  <>
    <option value="">Vyberte</option>
    { dates.map(
      date => <option key={date.dateBasic} value={date.dateBasic}>{date.dateExtended}</option>)
    }
  </>
)

export const JourneyPicker = ({ onJourneyChange }) => {
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromCity, toCity, date);

    fetch(`https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`)
      .then(response => response.json())
      .then(json => onJourneyChange(json.data));
  };

  useEffect( () => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then(response => response.json())
      .then(json => setCities(json.data));
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then(response => response.json())
      .then(json => setDates(json.data))
  }, []);

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select value={fromCity} onChange={(e) => setFromCity(e.target.value)}>
              <CityOptions cities={cities}/>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={(e) => setToCity(e.target.value)}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={(e) => setDate(e.target.value)}>
              <DateOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit" onClick={handleSubmit} disabled={toCity && fromCity && date ? false : true}>
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
