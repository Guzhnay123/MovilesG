import React, { useState } from 'react';

const planetOrbitalPeriodsCustom: Record<string, number> = {
  Mercury: 0.2408467, Venus: 0.61519726, Earth: 1.0, Mars: 1.8808158,
  Jupiter: 11.862615, Saturn: 29.447498, Uranus: 84.016846, Neptune: 164.79132,
};

const secondsInEarthYearCustom: number = 31557600;

const AgeCalculator = () => {
  const [userAgeInSeconds, setUserAgeInSeconds] = useState<number>(0);
  const [selectedCelestialBody, setSelectedCelestialBody] = useState<string>('Earth');
  
  const calculateUserAge = (): string => ((userAgeInSeconds / secondsInEarthYearCustom) / planetOrbitalPeriodsCustom[selectedCelestialBody]).toFixed(2);
  
  const handleUserAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setUserAgeInSeconds(parseInt(e.target.value));
  const handleCelestialBodyChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCelestialBody(e.target.value);

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>User Age in Seconds: <input type="number" value={userAgeInSeconds} onChange={handleUserAgeChange} /></label>
      <label>Select Celestial Body:
        <select value={selectedCelestialBody} onChange={handleCelestialBodyChange}>
          {Object.keys(planetOrbitalPeriodsCustom).map(celestialBody => <option key={celestialBody} value={celestialBody}>{celestialBody}</option>)}
        </select>
      </label>
      <p>Age on {selectedCelestialBody}: {calculateUserAge()} Earth-years old</p>
    </div>
  );
};

export default AgeCalculator;
