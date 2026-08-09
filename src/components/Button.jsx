import { Link } from 'react-router-dom';
import './Button.css';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Button = ({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'sm' ? 'btn--sm' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content =
    variant === 'primary' ? (
      <>
        <span className="btn__label">{children}</span>
        <span className="btn__icon">
          <ArrowIcon />
        </span>
      </>
    ) : (
      children
    );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
