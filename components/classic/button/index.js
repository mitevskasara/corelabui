import '../global.css';
import './button.css';

function Button({ children, variant = 'primary', className, loading = false, size = 'medium', disabled, ...props }) {
  return (
    <div className={`container container--${variant} ${disabled ? 'container--disabled' : ''}`}>
      <button {...props} className={`button button--${variant} button--${size} ${className}`} disabled={disabled || loading}>
        {children}
      </button>
      {loading && <div className={`loader loader--${variant}`} />}
    </div>
  );
}

export default Button;
