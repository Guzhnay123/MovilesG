import React, { useState } from 'react';

const isPangram = (sentence: string): boolean => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowercasedSentence = sentence.toLowerCase();

  for (let char of alphabet) {
    if (!lowercasedSentence.includes(char)) {
      return false;
    }
  }
  return true;
};


const PangramChecker: React.FC = () => {
  const [sentence, setSentence] = useState<string>('');
  const [isPangramResult, setIsPangramResult] = useState<boolean | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
  };

  const handleCheck = () => {
    const result = isPangram(sentence);
    setIsPangramResult(result);
  };

  return (
    <div>
      <h1>Verificador de Pangramas</h1>
      <input
        type="text"
        value={sentence}
        onChange={handleChange}
        placeholder="Ingrese una oración"
      />
      <button onClick={handleCheck}>Verificar</button>
      {isPangramResult !== null && (
        <h2>
          {isPangramResult ? 'La oración es un pangrama.' : 'La oración no es un pangrama.'}
        </h2>
      )}
    </div>
  );
};

export default PangramChecker;

