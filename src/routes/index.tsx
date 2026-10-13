import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Menu, X, ScanLine, Files, Fingerprint, Sprout, Globe2, Package, Info, MapPin, Scan } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandLogo, ProcessArt, MonitoringPreview } from '@/components/agrideep-visuals';
import { ContactSection } from '@/components/agrideep-contact';
import groveImage from '@/assets/olive-grove.jpg';

const description = 'AgriDeep is exploring satellite intelligence for olive grove monitoring in Tunisia. Join an exploratory conversation and help shape an initial pilot.';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'AgriDeep — Know the grove behind every drop' },
    { name: 'description', content: description },
    { property: 'og:title', content: 'AgriDeep — Satellite intelligence for olive groves' },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const problems = [
  { Icon: ScanLine, title: 'Limited visibility', text: 'Traditional product and traceability documents may not capture how orchard conditions evolve during the growing season.' },
  { Icon: Files, title: 'Fragmented information', text: 'Producers, exporters and buyers may rely on different records to understand the origin and production context of olive oil.' },
  { Icon: Fingerprint, title: 'Communicating provenance', text: 'Businesses need credible, understandable evidence to communicate the story behind their products to buyers.' },
];
const steps = [
  { title: 'Observe', text: 'Use satellite imagery to observe vegetation conditions across a selected olive grove over time.' },
  { title: 'Analyze', text: 'Calculate indicators such as NDVI to explore vegetation patterns and changes between usable observations.' },
  { title: 'Document', text: 'Organize observations, dates, maps and limitations into an understandable orchard-monitoring record.' },
];
const audiences = [
  { Icon: Sprout, title: 'Olive oil producers and exporters', text: 'Document orchard conditions and add useful context to existing origin and traceability records.' },
  { Icon: Globe2, title: 'Importers and distributors', text: 'Explore additional information that may help evaluate suppliers and communicate product provenance.' },
  { Icon: Package, title: 'Bottlers and premium brands', text: 'Explore new ways to tell a more transparent story about where olives were grown.' },
];
const navItems = [{label:'How It Works',href:'#how-it-works'},{label:"Who It’s For",href:'#who-its-for'},{label:'About',href:'#about'}];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <header className="site-header"><div className="page-wrap flex h-full items-center justify-between"><a href="#" aria-label="AgriDeep home"><BrandLogo/></a><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}<Button asChild variant="pilot" size="cta"><a href="#contact">Discuss a Pilot <ArrowUpRight/></a></Button></nav><div className="mobile-menu"><Button asChild variant="pilot" size="sm"><a href="#contact">Discuss a Pilot <ArrowUpRight/></a></Button><Button variant="ghost" size="icon" aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</Button></div></div>{menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navItems.map(item=><a key={item.href} href={item.href} onClick={()=>setMenuOpen(false)}>{item.label}</a>)}</nav>}</header>
    <main>
      <section className="hero" aria-labelledby="hero-title"><img src={groveImage} className="hero-image" width={1920} height={1024} alt="Aerial view of rows of olive trees across a Mediterranean grove" fetchPriority="high"/><div className="hero-shade"/><div className="hero-grid"/><svg className="hero-parcel" viewBox="0 0 600 600" fill="none" aria-hidden="true"><path d="M173 39L467 129L532 425L233 541L69 283Z" stroke="currentColor" strokeWidth="1.2" strokeDasharray="7 5"/>{[[173,39],[467,129],[532,425],[233,541],[69,283]].map(([x,y])=><g key={x}><path d={`M${x-6} ${y}h12M${x} ${y-6}v12`} stroke="currentColor"/></g>)}</svg>
        <div className="page-wrap hero-content fade-in"><div className="eyebrow"><span className="eyebrow-line"/> SATELLITE INTELLIGENCE FOR OLIVE GROVES</div><h1 id="hero-title">Know the grove<br/>behind every drop.</h1><p className="hero-description">AgriDeep is exploring how satellite intelligence can help olive oil businesses monitor orchard conditions over time and build a richer picture of the origin behind their products.</p><div className="hero-actions"><Button asChild variant="hero" size="cta"><a href="#contact">Discuss a Pilot <ArrowUpRight/></a></Button><Button asChild variant="heroOutline" size="cta"><a href="#how-it-works">How It Works <ArrowDown/></a></Button></div><p className="status"><span className="status-dot"/> Early-stage initiative · Seeking pilot partners</p></div>
        <div className="hero-bottom page-wrap"><span><MapPin size={11}/> ROOTED IN TUNISIA. LOOKING BEYOND.</span><span><Scan size={12}/> A NEW PERSPECTIVE ON PROVENANCE</span></div>
      </section>
      <div className="intro-strip"><div className="page-wrap intro-strip-inner"><p>Built around the people behind olive oil.</p><div className="sector-list"><span>Producers & exporters</span><span>Importers & distributors</span><span>Premium brands</span></div></div></div>
      <section className="section" id="the-opportunity"><div className="page-wrap"><div className="eyebrow section-label"><span className="eyebrow-line"/> THE OPPORTUNITY</div><div className="section-heading"><h2>Origin tells a story.<br/>The orchard tells you more.</h2><p>A richer view of provenance starts with understanding the place where olives grow.</p></div><div className="three-grid">{problems.map(({Icon,title,text})=><article className="problem-item" key={title}><Icon className="line-icon"/><h3 className="item-title">{title}</h3><p className="item-copy">{text}</p></article>)}</div></div></section>
      <section className="section how-section" id="how-it-works"><div className="page-wrap"><div className="eyebrow section-label"><span className="eyebrow-line"/> HOW IT WORKS</div><div className="section-heading"><h2>From satellite observations<br/>to orchard-level insight.</h2><p>Our proposed approach connects observations over time with a clear, documented orchard record.</p></div><div className="three-grid">{steps.map((step,i)=><article className="step" key={step.title}><div className="step-top"><span className="step-number">0{i+1}</span><span className="step-line"/></div><ProcessArt step={i+1}/><h3 className="item-title">{step.title}</h3><p className="item-copy">{step.text}</p></article>)}</div><div className="limitation"><Info size={15} className="shrink-0 mt-0.5"/><p>Satellite observations complement, rather than replace, field inspections, traceability records and laboratory testing.</p></div></div></section>
      <section className="section" id="concept"><div className="page-wrap"><div className="eyebrow section-label"><span className="eyebrow-line"/> ILLUSTRATIVE PRODUCT CONCEPT</div><div className="section-heading"><h2>A clearer view.<br/>A more complete record.</h2><p>A glimpse of the experience we’re exploring.<br/>Conceptual maps and data, not a live product.</p></div><MonitoringPreview/></div></section>
      <section className="section audience-section" id="who-its-for"><div className="page-wrap"><div className="eyebrow section-label"><span className="eyebrow-line"/> WHO IT’S FOR</div><div className="section-heading"><h2>For every link<br/>in the olive oil story.</h2><p>Different perspectives. A shared interest in understanding the origin behind the product.</p></div><div className="three-grid">{audiences.map(({Icon,title,text})=><article key={title} className="audience-card"><Icon className="line-icon"/><h3 className="item-title">{title}</h3><p className="item-copy">{text}</p></article>)}</div></div></section>
      <section className="pilot-section" id="about"><div className="pilot-pattern"/><div className="page-wrap pilot-inner"><div><div className="eyebrow"><span className="eyebrow-line"/> GROW WITH US</div><h2>Help shape the future<br/>of olive oil provenance.</h2></div><div><p className="pilot-copy">AgriDeep is speaking with olive oil professionals to understand their challenges before building the product. We are looking for a small number of producers, exporters and importers willing to share their experience and explore an initial pilot.</p><Button asChild variant="hero" size="cta" className="mt-6"><a href="#contact">Become a Pilot Partner <ArrowUpRight/></a></Button><p className="pilot-disclaimer">An initial discovery conversation is exploratory and does not commit either party to a commercial agreement.</p></div></div></section>
      <ContactSection/>
    </main>
    <footer className="site-footer"><div className="page-wrap"><div className="footer-top"><div><a href="#" aria-label="AgriDeep home"><BrandLogo/></a><p className="footer-tagline">Satellite intelligence for olive grove monitoring.</p></div><div><nav className="footer-nav" aria-label="Footer navigation">{navItems.map(item=><a href={item.href} key={item.href}>{item.label}</a>)}<a href="#contact">Get in touch <ArrowUpRight size={11} className="inline"/></a></nav><p className="footer-email">[ADD OFFICIAL AGRIDEEP EMAIL]</p></div></div><div className="footer-bottom"><span>© 2026 AgriDeep. All rights reserved.</span><span>Rooted in Tunisia. Built on curiosity.</span></div></div></footer>
  </>;
}
