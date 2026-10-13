import { ArrowUpRight, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return <section id="contact" className="section"><div className="page-wrap contact-layout"><div><div className="eyebrow section-label"><span className="eyebrow-line"/> LET’S START A CONVERSATION</div><h2>A better perspective starts with you.</h2><p className="contact-copy">Tell us a little about your business and your interest in olive grove monitoring.</p><p className="contact-note"><Info size={15} className="shrink-0 mt-0.5"/><span>This form is a design preview and is not connected yet. No information is sent or stored.</span></p></div>
    <form onSubmit={event => event.preventDefault()} aria-label="Conversation request — design preview"><div className="form-grid">
      <div className="form-field"><label htmlFor="full-name">Full name</label><Input id="full-name" name="fullName" autoComplete="name" placeholder="Your full name" required/></div>
      <div className="form-field"><label htmlFor="business-email">Business email</label><Input id="business-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required/></div>
      <div className="form-field"><label htmlFor="company">Company</label><Input id="company" name="company" autoComplete="organization" placeholder="Company name" required/></div>
      <div className="form-field"><label htmlFor="role">Role</label><select id="role" name="role" defaultValue="" required><option value="" disabled>Select your role</option>{['Producer','Exporter','Importer','Distributor','Bottler','Other'].map(role => <option key={role}>{role}</option>)}</select></div>
      <div className="form-field form-full"><label htmlFor="message">Message <span className="text-muted-foreground font-normal">(optional)</span></label><Textarea id="message" name="message" placeholder="What would you like to explore with AgriDeep?"/></div>
      <div className="form-full"><Button type="submit" variant="pilot" size="cta" disabled>Request a Conversation <ArrowUpRight/></Button><p className="form-footnote">Conversation requests will be available once the form is connected.</p><details className="confirmation-preview"><summary>Preview confirmation message</summary><p><span className="block text-[9px] font-semibold mb-1">DESIGN PREVIEW — NO REQUEST SENT</span>Thank you for your interest in AgriDeep. We'll be in touch to explore whether a conversation or pilot could be useful.</p></details></div>
    </div></form></div></section>;
}
