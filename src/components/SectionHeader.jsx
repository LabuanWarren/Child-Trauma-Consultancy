const SectionHeader = ({
  eyebrow,
  title,
  description,
  wide = false,
  className = '',
}) => (
  <header
    className={[
      'section-header',
      wide && 'section-header--wide',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="display-lg">{title}</h2>
    {description && <p className="body-lg">{description}</p>}
  </header>
);

export default SectionHeader;
