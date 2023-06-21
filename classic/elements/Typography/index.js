import './typography.css';

const VARIANTS = {
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  heading5: 'h5',
  heading6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
};

const Typography = ({ children, htmlElement, variant, margin = true }) => {
  const Element = htmlElement || VARIANTS[variant];
  let classes = `classic ${variant}`;
  if (!margin) classes += ' no-margin';

  return (
    <Element className={classes}>
      {children}
    </Element>
  );
}

export default Typography;
