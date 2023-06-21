import './input.css';

const Input = ({ size = 'medium', disabled = false, label, error, helperText, ...props }) => {
  let classes = 'classic container';
  if (disabled) classes += ' container--disabled';
  if (error) classes += ' container--error';

  let inputClasses = `input input--${size}`;
  if (error) inputClasses += ' input--error';

  return (
    <div className={classes}>
      {label && <label className="label">{label}</label>}
      <input {...props} className={inputClasses} readOnly={disabled} />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

export default Input;
