import '../global.css';
import './button.css';

const Button = ({ children, variant = 'primary', className, loading = false, size = 'medium', disabled, ...props }) => {
  return (
    <div className={`container container--${variant} ${disabled ? 'container--disabled' : ''}`}>
      <button {...props} className={`button button--${variant} button--${size} ${className}`} disabled={disabled}>
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
