import React from 'react';
import PropTypes from 'prop-types';

function CountryInfo({ countryData }) {
  const { name, capital, continents, population, currencies, languages, borders, area, idd, capitalInfo, timezones, flags} = countryData;
  console.log(timezones)
  return (
    <>
      <img src={flags.svg} alt={`Flag of ${name.common}`} />
      <h2>{name.common}</h2>

      <div className="row">
        <div className="dataRow">
          <h4>Capital:</h4>
          <span>{capital[0]}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Continent:</h4>
          <span>{continents[0]}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Population:</h4>
          <span>{population}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Currency:</h4>
          <span>
            {currencies[Object.keys(currencies)[0]].name} - {Object.keys(currencies)[0]}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Common Languages:</h4>
          <span>{Object.values(languages).join(', ')}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Borders:</h4>
          <span>{borders ? borders.join(', ') : 'N/A'}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Area:</h4>
          <span>{area}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Calling Code:</h4>
          <span>{idd.root} {capitalInfo.latlng[1]}</span>
        </div>
      </div>
      <div className="row">
        <div className="dataRow">
          <h4>Time Zones:</h4>
          <span>
            {timezones && Object.values(timezones).length > 0
              ? Object.values(timezones).join(', ')
              : 'No time zone data available'}
          </span>
        </div>
      </div>
    </>
  );
}

// Add prop validation
CountryInfo.propTypes = {
  countryData: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }).isRequired,
    capital: PropTypes.arrayOf(PropTypes.string).isRequired,
    continents: PropTypes.arrayOf(PropTypes.string).isRequired,
    population: PropTypes.number.isRequired,
    currencies: PropTypes.objectOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    languages: PropTypes.objectOf(PropTypes.string).isRequired,
    borders: PropTypes.arrayOf(PropTypes.string),
    area: PropTypes.number.isRequired,
    idd: PropTypes.shape({
      root: PropTypes.string.isRequired,
    }).isRequired,
    capitalInfo: PropTypes.shape({
      latlng: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
    timeZones: PropTypes.objectOf(PropTypes.string), // Now optional
  }).isRequired,
};

export default CountryInfo;
