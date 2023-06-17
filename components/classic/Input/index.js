import '../global.css';
import './input.css';

const Input = ({ size = 'medium', disabled = false, label, error, helperText, ...props }) => {
  return (
    <div className={`container container--${disabled ? 'disabled' : ''} container--${error ? 'error' : ''}`}>
      {label && <label className="label">{label}</label>}
      <input {...props} className={`input input--${size} input--${error ? 'error' : ''}`} readOnly={disabled} />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

export default Input;
