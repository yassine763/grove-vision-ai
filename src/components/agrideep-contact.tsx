import { ArrowUpRight } from 'lucide-react';

const LINKEDIN_URL = 'https://www.linkedin.com/company/126153957/';

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="page-wrap contact-layout contact-linkedin">
        <div>
          <div className="eyebrow section-label">
            <span className="eyebrow-line" /> LET'S CONNECT
          </div>
          <h2>A better perspective starts with you.</h2>
          <p className="contact-copy">
            Follow AgriDeep on LinkedIn to stay updated on our journey and reach out to start a conversation about olive grove monitoring.
          </p>
        </div>
        <div className="linkedin-cta-wrap">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow AgriDeep on LinkedIn"
            className="linkedin-card"
          >
            <span className="linkedin-logo" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </span>
            <div className="linkedin-text">
              <span className="linkedin-label">Follow us on LinkedIn</span>
              <span className="linkedin-handle">AgriDeep · linkedin.com/company/126153957</span>
            </div>
            <ArrowUpRight className="linkedin-arrow" />
          </a>
          <p className="contact-email">
            Prefer email? <a href="mailto:partnerships@agrideep.tn">partnerships@agrideep.tn</a>
          </p>
        </div>
      </div>
    </section>
  );
}
