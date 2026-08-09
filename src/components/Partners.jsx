import './Partners.css';

const partners = [
  {
    id: 'school',
    src: '/assets/partners/school_1x.webp',
    alt: 'Education and schools partner',
  },
  {
    id: 'community',
    src: '/assets/partners/community_1x.webp',
    alt: 'Community organisations partner',
  },
  {
    id: 'office',
    src: '/assets/partners/office_1x.webp',
    alt: 'Government agencies partner',
  },
];

const Partners = () => (
  <section className="partners" id="who-we-serve" aria-labelledby="partners-heading">
    <div className="partners__panel">
      <div className="partners__content">
        <p className="partners__lead" id="partners-heading">
          Partnering with schools, community organisations, government agencies, and
          legal professionals across Australia &amp; internationally.
        </p>

        <div className="partners__images">
          {partners.map((partner) => (
            <figure key={partner.id} className="partners__figure">
              <img
                className="partners__image"
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={220}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
