import { useState } from 'react';
import '../Components/CountryInformation.css';
import CountryInfo from './CountryInfo';

function CountryInformation() {
  const [countryName, setCountryName] = useState('');
  const [countryData, setCountryData] = useState(null); // Initialize as null
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!countryName) {
      setError('The input field cannot be empty');
      setCountryData(null);
      return;
    }

    const finalURL = 'https://restcountries.com/v3.1/all';
    
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((country) => 
          country.name.common.toLowerCase() === countryName.toLowerCase()
        );

        if (filteredData.length === 0) {
          setError('Country information not found.');
          setCountryData(null);
        } else {
          setError('');
          setCountryData(filteredData[0]); // Pass only the matched country
        }
      })
      .catch(() => {
        setError('An error occurred while fetching data');
        setCountryData(null);
      });
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          id="countryName"
          placeholder="Enter a country name here.."
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button id="Search-btn" onClick={handleSearch}>Search</button>
      </div>
      <div id="result">
        {error && <h3>{error}</h3>}
        {countryData && <CountryInfo countryData={countryData} />}
      </div>
    </div>
  );
}

export default CountryInformation;
