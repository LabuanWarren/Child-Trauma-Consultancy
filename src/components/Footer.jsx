import Logo from './Logo';
import { EMAIL, PHONE } from '../utils/seo';
import './Footer.css';

const footerLinks = {
  contact: [
    { label: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
    { label: EMAIL, href: `mailto:${EMAIL}` },
  ],
  legal: [
    'Reviews / Impact',
    'Privacy Policy',
    'Terms of Service',
    'Third Parties',
  ],
  organizations: [
    'Education & Schools',
    'Out-of-Home Care',
    'Legal & Family Courts',
  ],
  services: [
    'Training & Consulting',
    'Expert Witness Reports',
    'Practice Review',
  ],
};

const Footer = () => (
  <footer className="footer section-pad">
    <div className="container footer__inner">
      <div className="footer__top">
        <div className="footer__brand-block">
          <Logo />
          <p className="footer__tagline body-sm">
            Equipping professionals with practical, trauma-informed skills to
            respond effectively under pressure.
          </p>
        </div>
      </div>

      <div className="footer__links">
        <div>
          <p className="footer__column-title">Contact</p>
          <ul>
            {footerLinks.contact.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__column-title">Legal</p>
          <ul>
            {footerLinks.legal.map((label) => (
              <li key={label}>
                <a href="#">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__column-title">Organizations</p>
          <ul>
            {footerLinks.organizations.map((label) => (
              <li key={label}>
                <a href="#who-we-serve">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer__column-title">Services</p>
          <ul>
            {footerLinks.services.map((label) => (
              <li key={label}>
                <a href="#services">{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
