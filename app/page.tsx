"use client";

export default function Home() {

  return (
    <div>
      {/* Top nav */}
      <div className="w-full bg-white/70 backdrop-blur border-b border-black/10">
        <div className="max-w-screen-xl mx-auto px-[20px] flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center gap-3">
            <img src="/assets/waveonly.png" alt="DermaCompanion" className="h-12 w-auto rounded-[10px]" />
            <span className="text-[24px] font-semibold leading-tight"><span className="text-black/90">Derma</span><br className="md:hidden" /><span className="text-primary">Companion</span></span>
          </a>
          <nav className="text-[15px] sm:text-base text-black/70 flex gap-6">
            <a href="#how" className="hover:underline">Ablauf</a>
            <a href="#treat" className="hover:underline">Wobei wir helfen</a>
            <a href="#doctors" className="hover:underline">Für Ärzte</a>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/assets/hero1.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <header className="section section-space relative min-h-[620px] flex items-center text-white">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative -top-4 md:-top-5">
              <div className="mt-3 uppercase text-white font-semibold text-xl sm:text-2xl tracking-wide">Dermatologische Hilfe in 24 h</div>
              <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">Online‑Beratungen mit Fachärzten für<br className="md:hidden" /> 29 €</h1>
              <div className="mt-6"><a id="cta-hero" href="/capture.html?source=hero_cta" className="btn btn-primary">Jetzt Starten</a></div>
            </div>
            <div className="hidden md:block" />
          </div>
        </header>
      </div>
      
      {/* Promise strip (no separate bg, light grey overlay) */}
      <div className="w-full" style={{ backgroundColor: 'rgba(240,240,240,0.7)' }}>
        <section className="section section-space py-24 md:py-28">
          <div className="section-narrow text-center">
            <p className="text-2xl sm:text-3xl font-semibold">Kein Termin. Kein Wartezimmer. Kein Smalltalk. Klarheit in 24 h.</p>
          </div>
        </section>
      </div>

      {/* How it works */}
      <div className="w-full">
      <section id="how" className="section section-space">
        <div className="section-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">So nutzt du unseren Service</h2>
          <p className="mt-2 text-black/60">Antwort in 24 h</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          <div className="card text-center">
            <img src="/assets/DreiFotos.png" alt="3 klare Fotos + 6 Fragen" className="w-full h-43 object-cover object-top rounded-xl mb-4" />
            <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold mb-3">1</div>
            <h3 className="font-semibold mb-2">3 klare Fotos + 6 Fragen</h3>
            <p className="text-sm text-black/70">Leite uns drei gut beleuchtete Bilder und kurze Antworten weiter.</p>
          </div>
          <div className="card text-center">
            <img src="/assets/FachaerztlichePruefung.png" alt="Fachärztliche Prüfung" className="w-full h-43 object-cover object-top rounded-xl mb-4" />
            <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold mb-3">2</div>
            <h3 className="font-semibold mb-2">Fachärztliche Prüfung</h3>
            <p className="text-sm text-black/70">Dein Fall wird von Dermatologen begutachtet.</p>
          </div>
          <div className="card text-center">
            <img src="/assets/PlanundRezept.png" alt="Plan + Rezept" className="w-full h-43 object-cover object-top rounded-xl mb-4" />
            <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-bold mb-3">3</div>
            <h3 className="font-semibold mb-2">Plan + Rezept (falls sinnvoll)</h3>
            <p className="text-sm text-black/70">Konkrete Schritte für Zuhause – Rezept zur Abholung, wenn medizinisch angezeigt.</p>
          </div>
        </div>
        <div className="mt-6 text-center"><a href="/capture.html?source=how_cta" className="btn btn-primary">Jetzt Starten</a></div>
      </section>
      </div>

      {/* What we treat */}
      <div className="w-full" style={{ backgroundColor: 'rgba(240,240,240,0.7)' }}>
      <section id="treat" className="section section-space">
        <div className="section-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Wobei wir helfen können</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Intimbereich.png" alt="Intimbereich" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Intimbereich</h3>
                <p className="mt-1 text-sm text-black/70">Ausschläge, Juckreiz, Verdacht auf Geschlechtskrankheiten</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Akne.png" alt="Akne" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Akne</h3>
                <p className="mt-1 text-sm text-black/70">In allen Ausprägungen</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Ausschlaege.png" alt="Ausschläge" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Ausschläge, Ekzeme & Dermatitis</h3>
                <p className="mt-1 text-sm text-black/70">Reizungen, Juckreiz, Entzündungen</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Herpes.png" alt="Herpes" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Herpes</h3>
                <p className="mt-1 text-sm text-black/70">Lippen‑ oder Genital‑Herpes</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Psoriasis.png" alt="Psoriasis" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Psoriasis</h3>
                <p className="mt-1 text-sm text-black/70">Schuppenflechte</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <img src="/assets/Infektionen.png" alt="Infektionen" className="w-22 h-22 rounded-lg object-contain flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Infektionen</h3>
                <p className="mt-1 text-sm text-black/70">Bakteriell, viral oder pilzbedingt</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center"><a href="/capture.html?source=scope_cta" className="btn btn-primary">Jetzt Starten</a></div>
      </section>
      </div>

      {/* Why us (Trust) */}
      <div className="w-full">
      <section id="trust" className="section section-space">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <div className="card text-center">
                <img 
                  src="/assets/doclandscape.png" 
                  alt="Erfahrene Dermatologen" 
                  className="hidden md:block w-full h-85 object-cover rounded-xl mb-4" 
                />
                <img 
                  src="/assets/docportrait.png" 
                  alt="Erfahrene Dermatologen" 
                  className="md:hidden w-full h-85 object-cover rounded-xl mb-4" 
                />
                <h3 className="font-semibold mb-2">Erfahrene Dermatologen</h3>
                <p className="text-sm text-black/70">Behandlung durch lizenzierte Fachärzte</p>
              </div>
            </div>
            <div className="md:col-span-1">
            <div className="card">
              <h3 className="font-semibold mb-3 text-sm">Höchster Datenschutz für Gesundheitsdaten</h3>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  ✓ DSGVO-konform
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  🇪🇺 EU-Server
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  🔒 Ende-zu-Ende verschlüsselt
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      </div>

      {/* CTA strip */}
      <div className="w-full" style={{ backgroundColor: 'rgba(240,240,240,0.7)' }}>
      <section className="section section-space">
        <div className="section-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Antwort in 24 h</h2>
          <p className="mt-2 text-black/70">Österreich & Deutschland – komplett online, diskret, klar.</p>
          <div className="mt-4"><a id="cta-mid" href="/capture.html?source=mid_cta" className="btn btn-primary">Jetzt Starten</a></div>
        </div>
      </section>
      </div>

      {/* Für Ärzte – Recruiting Fake Door */}
      <div className="w-full">
      <section id="doctors" className="section section-space">
        <div className="section-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold text-center">Für Ärztinnen und Ärzte</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
            <div className="card">
              <h3 className="font-semibold">Mitwirken bei DermaCompanion</h3>
              <ul className="mt-3 text-sm text-black/70 space-y-2 list-disc pl-5">
                <li>Asynchron arbeiten – flexibel neben Praxis und Klinik</li>
                <li>Digitaler Workflow – sichere Plattform, strukturierte Fälle</li>
                <li>Vergütung pro Fall – transparent und fair</li>
              </ul>
              <div className="mt-6 text-center"><a href="/capture.html?source=doctors_cta" className="btn btn-primary">Interesse bekunden</a></div>
            </div>
            <div className="card">
              <h3 className="font-semibold">Qualitätsrahmen</h3>
              <p className="mt-2 text-sm text-black/70">Nur approbierte Fachärzte für Dermatologie. Evidenzbasiert, datenschutzkonform, EU‑gehostet.</p>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* FAQ (static open) */}
      <div className="w-full" style={{ backgroundColor: 'rgba(240,240,240,0.7)' }}>
      <section className="section section-space">
        <div className="section-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold">Häufige Fragen</h2>
          <div className="mt-6 grid gap-4">
            <div className="card"><h3 className="font-medium">Übernimmt die Versicherung die Kosten?</h3><p className="mt-2 text-sm text-black/70">Wir starten als Selbstzahler‑Service. Optionen mit Kassen/Privatversicherung können folgen.</p></div>
            <div className="card"><h3 className="font-medium">Wie schnell bekomme ich eine Antwort?</h3><p className="mt-2 text-sm text-black/70">Innerhalb von 24 Stunden. Fast‑Track ist möglich.</p></div>
            <div className="card"><h3 className="font-medium">Erhalte ich ein Rezept?</h3><p className="mt-2 text-sm text-black/70">Ja, wenn es medizinisch sinnvoll ist – Abholung in deiner Apotheke.</p></div>
            <div className="card"><h3 className="font-medium">Wie sicher sind meine Daten?</h3><p className="mt-2 text-sm text-black/70">EU‑Hosting, Verschlüsselung, strenge Zugriffskontrollen. DSGVO‑konform. Keine Datenverkäufe.</p></div>
            <div className="card"><h3 className="font-medium">Was ist mit Notfällen oder Warnzeichen?</h3><p className="mt-2 text-sm text-black/70">Bei roten Flaggen bitte sofort Notruf/Notfallambulanz. Unser Service ist nicht für Notfälle.</p></div>
          </div>
        </div>
      </section>
      </div>

      {/* Footer */}
      <footer className="section section-space">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-black/70">
          <div>
            <div className="font-semibold">DermaCompanion</div>
            <p className="mt-2">Online‑Dermatologie in Österreich & Deutschland.</p>
          </div>
          <div>
            <div className="font-semibold">Rechtliches</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="#">Impressum</a></li>
              <li><a className="hover:underline" href="#">Datenschutz</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Kontakt</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="mailto:info@dermacompanion.com">info@dermacompanion.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-black/10 pt-6 text-xs text-black/50">© {new Date().getFullYear()} DermaCompanion. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  );
}
