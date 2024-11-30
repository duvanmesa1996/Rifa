import PropTypes from 'prop-types';

const RegistrationForm = ({ number, onClose, onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(number);
  };

  return (
    <div>
      <h2>Registro para el número {number}</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Registrar</button>
      </form>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

// Validación de props con PropTypes
RegistrationForm.propTypes = {
  number: PropTypes.number.isRequired, // number debe ser obligatorio y de tipo número
  onClose: PropTypes.func.isRequired, // onClose debe ser obligatorio y de tipo función
  onRegister: PropTypes.func.isRequired, // onRegister debe ser obligatorio y de tipo función
};

export default RegistrationForm;
