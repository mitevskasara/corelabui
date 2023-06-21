import './link.css';

const Link = ({ children, disabled, size = 'medium', ...props }) => {
  let classes = `classic link link--${size}`;
  if (disabled) classes += ' link--disabled';

  return (
    <a {...props} className={classes}>
      {children}
    </a>
  );
}

export default Link;
