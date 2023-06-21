import { useState, useRef, useEffect } from 'react';
import './select.css';

const Select = ({ size = 'medium', disabled = false, label, error, helperText, options, ...props }) => {
  const [open, toggle] = useState(false);
  const ref = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggle(false);
      }
    };
    document?.addEventListener('click', handleClickOutside);
    return () => {
      document?.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className={`container container--${disabled ? 'disabled' : ''} container--${error ? 'error' : ''}`} ref={ref} onClick={() => toggle(!open)}>
        {label && <label className="label">{label}</label>}
        <input {...props} className={`select select--${size} select--${error ? 'error' : ''}`} readOnly ref={inputRef} />
        {helperText && <span className="helper-text">{helperText}</span>}
      </div>
      <div className={`menu menu--${open ? 'open' : 'closed'}`}>
        {options?.map((option, index) =>
          <div value={option.value} className="option" key={index} onClick={() => inputRef?.current.value = option?.label}>{option.label}</div>
        )}
      </div>
    </div>
  );
}

export default Select;
