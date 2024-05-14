import React, { useState } from 'react';

const throwDice = (): number => Math.floor(Math.random() * 6) + 1;

const generateAbilityScore = (): number => {
  const diceThrows = Array.from({ length: 4 }, () => throwDice());
  diceThrows.sort((a, b) => b - a);
  return diceThrows.slice(0, 3).reduce((acc, val) => acc + val, 0);
};

const calculateConstitutionModifier = (constitution: number): number => Math.floor((constitution - 10) / 2);

const calculateHitPoints = (constitutionModifier: number): number => 10 + constitutionModifier;

const generateCharacter = (): Record<string, any> => {
  const abilityCharacteristics = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
  const character: Record<string, any> = {};

  abilityCharacteristics.forEach((ability) => {
    character[ability] = generateAbilityScore();
  });

  const constitution = character['Constitution'];
  const constitutionModifier = calculateConstitutionModifier(constitution);
  character['Constitution Modifier'] = constitutionModifier;
  character['Hit Points'] = calculateHitPoints(constitutionModifier);

  return character;
};

const CharacterGenerator: React.FC = () => {
  const [character, setCharacter] = useState<Record<string, any> | null>(null);

  const generateNewCharacter = () => {
    const newCharacter = generateCharacter();
    setCharacter(newCharacter);
  };

  return (
    <div>
      <h1>D&D Character Generator</h1>
      <button onClick={generateNewCharacter}>Generate Character</button>
      {character && (
        <div>
          <h2>Generated Character</h2>
          <ul>
            {Object.entries(character).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, ' ')}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharacterGenerator;
