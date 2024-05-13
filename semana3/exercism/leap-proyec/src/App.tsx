import React, { useState } from 'react';

const LeapYear: React.FC = () => {
  const [inputYear, setInputYear] = useState<number | string>('');
  const [isLeap, setIsLeap] = useState<boolean | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputYear(e.target.value);
  };

  const handleCheckLeapYear = () => {
    const year = parseInt(inputYear as string);
    if (isNaN(year)) {
      alert('Please enter a valid year!');
      return;
    }
    setIsLeap(isLeapYear(year));
  };

  const isLeapYear = (year: number): boolean => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      return true;
    }
    return false;
  };

  return (
    <div className="LeapYear">
      <h1>Leap Year Checker</h1>
      <input
        type="number"
        placeholder="Enter a year"
        value={inputYear}
        onChange={handleInputChange}
      />
      <button onClick={handleCheckLeapYear}>Check</button>
      {isLeap !== null && (
        <p>{isLeap ? `${inputYear} is a leap year!` : `${inputYear} is not a leap year.`}</p>
      )}
    </div>
  );
};

export default LeapYear;
