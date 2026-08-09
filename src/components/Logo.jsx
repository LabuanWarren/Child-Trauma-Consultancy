import './Logo.css';

const Logo = ({ className = '' }) => (
  <img
    className={`logo ${className}`.trim()}
    src="/assets/logo/logo-horizontal.svg"
    alt="Child Trauma Consultancy"
    width={148}
    height={48}
    loading="eager"
    decoding="async"
  />
);

export default Logo;
