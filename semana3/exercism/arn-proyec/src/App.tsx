import React, { useState } from 'react';

const dnaToRna = (dnaSequence: string): string => {
  return dnaSequence.replace(/./g, nucleotide => {
    switch (nucleotide) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        throw new Error('Invalid nucleotide found in DNA sequence');
    }
  });
};

const RnaSearch: React.FC = () => {
  const [dnaSequence, setDnaSequence] = useState<string>('');
  const [rnaSequence, setRnaSequence] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDnaSequence(e.target.value);
  };

  const handleConvertToRna = () => {
    try {
      const rna = dnaToRna(dnaSequence);
      setRnaSequence(rna);
    } catch (error) {
      //alert(error.message);
    }
  };

  return (
    <div className="RnaSearch">
      <h1>DNA to RNA Converter</h1>
      <input
        type="text"
        placeholder="Enter DNA sequence"
        value={dnaSequence}
        onChange={handleInputChange}
      />
      <button onClick={handleConvertToRna}>Convert</button>
      <div>
        <p>DNA Sequence: {dnaSequence}</p>
        <p>RNA Sequence: {rnaSequence}</p>
      </div>
    </div>
  );
};

export default RnaSearch;
