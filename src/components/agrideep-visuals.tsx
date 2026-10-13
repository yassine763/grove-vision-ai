import { ArrowUp, Cloud, Layers } from 'lucide-react';
import logoAsset from '@/assets/agrideep-logo.png.asset.json';

export function BrandLogo() {
  return <span className="logo"><img src={logoAsset.url} alt="" aria-hidden="true"/>AgriDeep<span className="text-olive">.</span></span>;
}

export function ProcessArt({ step }: { step: number }) {
  return <div className="step-art" aria-hidden="true"><svg viewBox="0 0 230 140" fill="none">
    {step === 1 ? <>
      <path d="M28 101L109 63L201 99L120 132Z" stroke="currentColor" opacity=".4"/><path d="M53 100L111 75L176 100L119 120Z" stroke="currentColor" strokeDasharray="3 3"/>
      {[0,1,2].map(r => [0,1,2,3].map(c => <circle key={`${r}-${c}`} cx={81+c*19+r*7} cy={91+r*9-c*2} r="3" fill="currentColor" opacity=".45"/>))}
      <g transform="translate(106 21) rotate(24)"><rect x="0" y="0" width="20" height="17" stroke="currentColor"/><path d="M-23 2H-4V15H-23ZM24 2H43V15H24ZM-14 2V15M33 2V15M10 17V27M5 27H15" stroke="currentColor"/></g>
      <path d="M112 53L78 83M131 52L161 85" stroke="currentColor" strokeDasharray="3 4" opacity=".5"/>
    </> : step === 2 ? <>
      {[0,1,2].map(i => <path key={i} d={`M42 ${48+i*21}L111 ${20+i*21}L186 ${48+i*21}L118 ${79+i*21}Z`} stroke="currentColor" opacity={.35+i*.2} fill={i===0?'var(--secondary)':'none'}/>)}
      <path d="M78 49L96 53L110 38L131 47L149 36" stroke="currentColor" strokeWidth="1.5"/><path d="M108 91L116 85L124 91" stroke="currentColor"/>
    </> : <>
      <rect x="68" y="15" width="88" height="110" rx="3" stroke="currentColor" opacity=".6"/><path d="M83 33H125M83 40H110M83 92H139M83 99H139M83 106H117" stroke="currentColor" opacity=".5"/><path d="M83 76L102 54L134 61L125 81Z" stroke="currentColor"/><path d="M92 70L104 62L124 67" stroke="currentColor" opacity=".5"/><circle cx="149" cy="111" r="14" fill="var(--muted)" stroke="currentColor"/><path d="M143 111L147 115L155 106" stroke="currentColor"/>
    </>}
  </svg></div>;
}

export function MonitoringPreview() {
  return <div className="monitoring">
    <div className="monitoring-top"><div><h3>Orchard monitoring record</h3><p>Example olive grove · Seasonal observations</p></div><span className="concept-badge"><Layers size={12}/> Concept preview</span></div>
    <div className="monitoring-body">
      <div className="parcel-panel"><div className="panel-label"><span>Grove overview</span><span className="text-muted-foreground text-[9px] font-normal">Illustrative parcel</span></div>
        <div className="parcel-map"><svg viewBox="0 0 480 280" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Conceptual olive grove parcel with illustrative vegetation-index zones">
          <rect width="480" height="280" className="map-field"/><path d="M0 0H140L110 280H0Z" className="map-medium" opacity=".4"/><path d="M294 0H480V280H300L336 127Z" className="map-medium" opacity=".6"/>
          <path d="M31 -20L121 63L92 291M-10 222L158 190L280 240L490 205" className="map-track"/>
          <path d="M145 38L351 60L374 216L163 243L122 141Z" className="map-medium"/><path d="M145 38L236 49L228 151L122 141Z" className="map-high"/><path d="M236 49L351 60L358 116L228 151Z" className="map-dark" opacity=".75"/><path d="M122 141L228 151L244 233L163 243Z" className="map-field"/><path d="M228 151L358 116L374 216L244 233Z" className="map-high"/>
          {Array.from({length:11},(_,r) => Array.from({length:20},(_,c) => <circle key={`${r}-${c}`} cx={8+c*25+(r%2)*4} cy={9+r*26} r={4} className="map-tree"/>))}
          <path d="M145 38L351 60L374 216L163 243L122 141Z" className="map-outline"/>
        </svg><div className="map-north"><ArrowUp size={15}/>N</div><span className="map-label">Illustrative vegetation-index layer</span></div>
        <div className="map-legend"><span>Lower index</span><div className="legend-scale"><i/><i/><i/><i/></div><span>Higher index</span></div>
      </div>
      <div className="chart-panel"><div className="panel-label"><span>Vegetation over time</span><span className="text-olive text-[9px]">NDVI</span></div><p className="chart-note">Illustrative data — not live satellite measurements.</p>
        <svg className="ndvi-chart" viewBox="0 0 450 169" role="img" aria-label="Illustrative NDVI trend from February to June. Fictional values, not satellite measurements.">
          {[28,65,102,139].map((y,i) => <g key={y}><line x1="32" y1={y} x2="430" y2={y} className="chart-grid"/><text x="2" y={y+3} className="chart-text">{['0.8','0.6','0.4','0.2'][i]}</text></g>)}
          <path d="M40 91L115 74L193 48L271 57L348 42L423 64V139H40Z" className="chart-fill"/><path d="M40 91L115 74L193 48L271 57L348 42L423 64" className="chart-line"/>
          {[[40,91],[115,74],[193,48],[271,57],[348,42],[423,64]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="3.5" className="chart-point"/>)}
          {['06 Feb','02 Mar','26 Mar','19 Apr','13 May','06 Jun'].map((date,i) => <text key={date} x={40+i*76.6} y="162" textAnchor="middle" className="chart-text">{date}</text>)}
        </svg>
        <div className="timeline"><p className="timeline-title">Observation timeline <span className="font-normal text-muted-foreground">· Illustrative season</span></p><div className="timeline-dates">{['06 Feb','02 Mar','26 Mar','07 Apr','19 Apr','13 May','06 Jun'].map(date => <div key={date} className={`timeline-date ${date==='07 Apr'?'unavailable':''}`}><i/><span>{date}</span>{date==='07 Apr' && <span className="block mt-1">Cloud cover</span>}</div>)}</div></div>
      </div>
    </div><div className="monitoring-quality"><Cloud size={14} className="shrink-0 mt-0.5"/><p><strong className="font-semibold">Data quality matters.</strong> Cloud cover and image availability can affect results. Not every observation is usable; gaps and limitations would be documented.</p></div>
  </div>;
}
