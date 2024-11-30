import  { useState } from 'react';
import NumberButton from '@components/NumberButton';


import RegistrationForm from './components/RegistrationForm';

export default function App() {
  const [occupiedNumbers, setOccupiedNumbers] = useState([]); 
  const [selectedNumber, setSelectedNumber] = useState(null); 

  
  const handleSelectNumber = (number) => {
    if (!occupiedNumbers.includes(number)) {
      setSelectedNumber(number); 
    } else {
      alert('Este número no está disponible. Por favor, selecciona otro.');
    }
  };

  
  const handleRegister = (number) => {
    setOccupiedNumbers([...occupiedNumbers, number]); 
    setSelectedNumber(null); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Rifa de Números</h1>
      
      
      <div className="flex flex-wrap justify-center">
        {[...Array(100).keys()].map((number) => (
          <NumberButton 
            key={number} 
            number={number < 10 ? `0${number}` : `${number}`} 
            onSelect={handleSelectNumber} 
            isOccupied={occupiedNumbers.includes(number)} 
          />
        ))}
      </div>

      {selectedNumber !== null && (
        <RegistrationForm 
          number={selectedNumber} 
          onClose={() => setSelectedNumber(null)} 
          onRegister={handleRegister}
        />
      )}
    </div>
  );
}
