import PropTypes from 'prop-types';

const NumberButton = ({ number, onSelect, isOccupied }) => {
  return (
    <button 
      className={`w-16 h-16 m-2 text-xl font-bold rounded-lg transition-colors duration-300 
        ${isOccupied ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'}`}
      onClick={() => !isOccupied && onSelect(number)}
      disabled={isOccupied}
      aria-disabled={isOccupied}
      aria-label={`Número ${number} ${isOccupied ? 'ocupado' : 'disponible'}`}
    >
      {number}
    </button>
  );
};

// Validación de propiedades con PropTypes
NumberButton.propTypes = {
  number: PropTypes.string.isRequired, 
  onSelect: PropTypes.func.isRequired, 
  isOccupied: PropTypes.bool.isRequired, 
};

export default NumberButton;
