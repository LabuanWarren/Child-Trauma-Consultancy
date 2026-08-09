import { useId, useState } from 'react';
import Button from './Button';
import { EMAIL } from '../utils/seo';
import './ContactSection.css';

const LockIcon = () => (
  <svg
    className="contact-form__privacy-icon"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="3.5"
      y="7"
      width="9"
      height="6.5"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const FaqChevronIcon = ({ isOpen }) => (
  <svg
    className={`contact-faq__chevron ${isOpen ? 'is-open' : ''}`}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sectorOptions = [
  { value: '', label: 'Select your sector...' },
  { value: 'education', label: 'Education & Schools' },
  { value: 'frontline', label: 'Frontline, Care & Community Services' },
  { value: 'legal', label: 'Legal Professionals & Family Courts' },
  { value: 'corporate', label: 'Corporate & HR / Workplace Diagnostics' },
  { value: 'general', label: 'General Inquiry' },
];

const serviceOptions = [
  { value: '', label: 'Select service interest...' },
  { value: 'workshops', label: 'Live Interactive Workshops / Training' },
  { value: 'diagnostic', label: 'Workplace Diagnostic & Psychosocial Audit' },
  { value: 'expert-witness', label: 'Expert Witness Assessment / Court Report' },
  { value: 'media', label: 'Media / Speaking Engagement' },
];

const faqItems = [
  {
    id: 'booking-lead-time',
    question: 'How far in advance do we need to book training sessions?',
    answer:
      'We recommend reaching out 3–4 weeks prior to your intended date to ensure availability for customized content preparation.',
  },
  {
    id: 'expert-witness-turnaround',
    question: 'How quickly can an Expert Witness Assessment be conducted?',
    answer:
      'Turnaround times depend on court deadlines and case complexity. Please email us directly for urgent legal timelines.',
  },
];

const initialFormState = {
  fullName: '',
  workEmail: '',
  phone: '',
  organization: '',
  sector: '',
  service: '',
  message: '',
};

const ContactSection = () => {
  const formId = useId();
  const [formData, setFormData] = useState(initialFormState);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const sectorLabel =
      sectorOptions.find((option) => option.value === formData.sector)?.label ?? '';
    const serviceLabel =
      serviceOptions.find((option) => option.value === formData.service)?.label ?? '';

    const body = [
      `Full Name: ${formData.fullName}`,
      `Work Email: ${formData.workEmail}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      `Organization: ${formData.organization}`,
      `Sector: ${sectorLabel}`,
      `Service Interest: ${serviceLabel}`,
      '',
      'Message:',
      formData.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent('New Inquiry from Website')}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const toggleFaq = (id) => {
    setOpenFaq((current) => (current === id ? null : id));
  };

  return (
    <section className="contact-section" aria-labelledby="contact-form-title">
      <div className="contact-section__panel">
        <div className="contact-section__grid">
          <div className="contact-section__form-col">
            <header className="contact-section__form-header">
              <h2 className="contact-section__form-title" id="contact-form-title">
                Start a Conversation
              </h2>
              <p className="contact-section__form-subtitle">
                Fill out the details below, and Jaime or a member of our team will get
                back to you promptly.
              </p>
            </header>

            <form
              className="contact-form"
              id={formId}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-fullName`}>
                  Full Name
                </label>
                <input
                  className="contact-form__input"
                  type="text"
                  id={`${formId}-fullName`}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Sarah Jenkins"
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-workEmail`}>
                  Work Email
                </label>
                <input
                  className="contact-form__input"
                  type="email"
                  id={`${formId}-workEmail`}
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="e.g., s.jenkins@organization.org"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-phone`}>
                  Phone Number <span className="contact-form__optional">(Optional)</span>
                </label>
                <input
                  className="contact-form__input"
                  type="tel"
                  id={`${formId}-phone`}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +61 400 000 000"
                  autoComplete="tel"
                />
              </div>

              <div className="contact-form__field">
                <label
                  className="contact-form__label"
                  htmlFor={`${formId}-organization`}
                >
                  Organization / Practice Name
                </label>
                <input
                  className="contact-form__input"
                  type="text"
                  id={`${formId}-organization`}
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="e.g., St. Jude Primary School"
                  autoComplete="organization"
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-sector`}>
                  Sector / Pathway
                </label>
                <select
                  className="contact-form__select"
                  id={`${formId}-sector`}
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required
                >
                  {sectorOptions.map((option) => (
                    <option key={option.value || 'placeholder'} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-service`}>
                  How Can We Support You?
                </label>
                <select
                  className="contact-form__select"
                  id={`${formId}-service`}
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value || 'placeholder'} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label" htmlFor={`${formId}-message`}>
                  Your Message
                </label>
                <textarea
                  className="contact-form__textarea"
                  id={`${formId}-message`}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your team, timeline, or key challenges..."
                  rows={5}
                  required
                />
              </div>

              <div className="contact-form__actions">
                <Button type="submit" variant="primary">
                  Send Inquiry
                </Button>
                <p className="contact-form__privacy">
                  <LockIcon />
                  <span>
                    Your information is strictly confidential and will never be shared.
                  </span>
                </p>
              </div>
            </form>
          </div>

          <aside className="contact-section__info-col" aria-label="Direct contact channels">
            <div className="contact-faq">
              <h3 className="contact-faq__title">Frequently Asked Inquiries</h3>
              <div className="contact-faq__list">
                {faqItems.map((item) => {
                  const isOpen = openFaq === item.id;
                  const panelId = `${formId}-faq-${item.id}`;

                  return (
                    <div key={item.id} className="contact-faq__item">
                      <button
                        type="button"
                        className="contact-faq__trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleFaq(item.id)}
                      >
                        <span className="contact-faq__question">{item.question}</span>
                        <span className="contact-faq__icon">
                          <FaqChevronIcon isOpen={isOpen} />
                        </span>
                      </button>
                      <div
                        id={panelId}
                        className={`contact-faq__panel ${isOpen ? 'is-open' : ''}`}
                        role="region"
                        aria-hidden={!isOpen}
                      >
                        <div className="contact-faq__panel-inner">
                          <p className="contact-faq__answer">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="contact-section__channels">
              <div className="contact-info-card">
                <h3 className="contact-info-card__title">Direct Email</h3>
                <a className="contact-info-card__detail" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <p className="contact-info-card__subtext">
                  Best for legal document submissions, formal RFPs, or direct inquiries.
                </p>
              </div>

              <div className="contact-info-card">
                <h3 className="contact-info-card__title">Service Areas</h3>
                <p className="contact-info-card__detail">
                  Partnering with organizations across Australia &amp; internationally.
                </p>
                <p className="contact-info-card__subtext">
                  Services delivered on-site or via interactive live Zoom sessions.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
