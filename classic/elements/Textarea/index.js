import './textarea.css';

const Textarea = ({ disabled = false, label, error, helperText, ...props }) => {
  let classes = 'classic container';
  if (disabled) classes += ' container--disabled';
  if (error) classes += ' container--error';

  let textareaClasses = 'input';
  if (error) textareaClasses += ' input--error';

  return (
    <div className={classes}>
      {label && <label className="label">{label}</label>}
      <textarea {...props} className={textareaClasses} readOnly={disabled} rows="5" />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

export default Textarea;
