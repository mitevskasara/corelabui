import './button.css';

const Button = ({ children, variant = 'primary', loading = false, size = 'medium', disabled, ...props }) => {
  let classes = `container container--${variant}`;
  if (disabled) classes += ' container--disabled';
  return (
    <div className={classes}>
      <button {...props} className={`classic button button--${variant} button--${size}`} disabled={disabled}>
        {loading ?
          <div className={`loader loader--${variant}`}>
            <span />
            <span />
            <span />
          </div> :
          <span>{children}</span>
        }
      </button>
    </div>
  );
}

export default Button;
