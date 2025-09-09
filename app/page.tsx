"use client";

import { useId, useMemo, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const emailId = useId();
  const nameId = useId();
  const noteId = useId();
  const consentId = useId();

  const isEmailValid = useMemo(() => /.+@.+\..+/.test(email), [email]);
  const canSubmit = isEmailValid && consent && status !== "submitting";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("submitting");
    // Simulate async submit; backend integration (Firebase) to be added later
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setName("");
      setNote("");
      setConsent(false);
    }, 700);
  }

  return (
    <div>
      {/* Hero */}
      <header className="section section-space">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="kicker">DermaCompanion</div>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Dermatologie‑Antworten in Stunden. Online.
            </h1>
            <p className="mt-4 text-[17px] leading-7 text-black/70">
              Lade Fotos hoch, erhalte einen ärztlich geprüften Plan und hole die Behandlung in deiner Apotheke ab. Privat. Sicher. EU‑gehostet.
            </p>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-black/60">
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-primary"></span> Lizensierte Ärzt:innen</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-primary"></span> DSGVO‑konforme Sicherheit</li>
              <li className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-primary"></span> EU‑Datenhosting</li>
            </ul>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3 max-w-xl" aria-live="polite">
              <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                <label htmlFor={emailId} className="sr-only">E‑Mail</label>
                <input
                  id={emailId}
                  type="email"
                  required
                  className="input"
                  placeholder="E‑Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={email.length > 0 ? (!isEmailValid).toString() : undefined}
                />
                <button className="btn btn-primary" disabled={!canSubmit}>
                  {status === "submitting" ? "Sende…" : "Jetzt zur Warteliste anmelden"}
                </button>
              </div>
              <div className="flex items-start gap-3">
                <input id={consentId} type="checkbox" className="checkbox mt-0.5" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <label htmlFor={consentId} className="text-sm text-black/70">
                  Ich willige ein, dass meine Angaben gespeichert und zur Kontaktaufnahme über diesen Service verwendet werden. Wartelistenplätze sind limitiert.
                </label>
              </div>
              {status === "success" && (
                <p className="text-sm text-green-700">Danke! Du stehst auf der Warteliste. Wir melden uns zeitnah.</p>
              )}
            </form>
          </div>
          <div>
            <div className="placeholder h-[320px] sm:h-[380px]">
              Hero‑Illustration: Ärztin + Smartphone‑UI, weiche Teal‑Verläufe
            </div>
          </div>
        </div>
        <div className="mt-6 text-xs text-black/50">Keine Notfälle. Bei Warnzeichen wende dich bitte sofort an den Notruf.</div>
      </header>

      {/* How it works */}
      <section className="section section-space">
        <div className="section-narrow text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">So funktioniert’s</h2>
          <p className="mt-2 text-black/60">Standard unter 48h • Fast‑Track unter 12h</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="card">
            <div className="placeholder h-[120px]">Icon: Foto‑Upload</div>
            <h3 className="mt-4 font-semibold">1) 3 klare Fotos + 6 Fragen</h3>
            <p className="mt-1 text-sm text-black/70">Leite uns drei gut beleuchtete Bilder und kurze Antworten weiter.</p>
          </div>
          <div className="card">
            <div className="placeholder h-[120px]">Icon: Ärztlicher Review</div>
            <h3 className="mt-4 font-semibold">2) Review durch Dermatolog:in</h3>
            <p className="mt-1 text-sm text-black/70">Board‑zertifizierte Fachärzt:innen prüfen deinen Fall.</p>
          </div>
          <div className="card">
            <div className="placeholder h-[120px]">Icon: Plan + Rezept</div>
            <h3 className="mt-4 font-semibold">3) Plan + Rezept (falls sinnvoll)</h3>
            <p className="mt-1 text-sm text-black/70">Du erhältst einen Behandlungsplan – plus Rezept zur Abholung in der Apotheke, wenn medizinisch angezeigt.</p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="section section-space">
        <div className="card">
          <h2 className="text-2xl sm:text-3xl font-bold">Was wir behandeln</h2>
          <p className="mt-2 text-black/70">Akne, Ekzeme, Ausschläge, unauffällige Muttermale (keine Notfälle).</p>
          <p className="mt-1 text-sm text-black/50">Nicht für Notfälle. Bei starkem Fieber, starker Blutung, plötzlichen schweren Symptomen: Notruf.</p>
        </div>
      </section>

      {/* Why us */}
      <section className="section section-space">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <div className="placeholder h-[200px]">Porträt Dr. Max Mustermann, Dermatologe</div>
            <h3 className="mt-4 font-semibold">Dr. Dr. Max Mustermann</h3>
            <p className="mt-1 text-sm text-black/70">Facharzt für Dermatologie, 12+ Jahre Erfahrung, Ärztekammer‑Registrierung AT‑123456.</p>
          </div>
          <div className="card">
            <div className="placeholder h-[200px]">EU‑Server + Verschlüsselung</div>
            <h3 className="mt-4 font-semibold">Sicherheit auf Gesundheitsniveau</h3>
            <p className="mt-1 text-sm text-black/70">EU‑Hosting, Verschlüsselung, strenge Zugriffskontrollen. Entwickelt mit Expertise in Gesundheits‑IT‑Sicherheit.</p>
          </div>
        </div>
      </section>

      {/* Social proof / CTA */}
      <section className="section section-space">
        <div className="section-narrow text-center">
          <div className="kicker">Pre‑Launch</div>
          <h2 className="text-2xl sm:text-3xl font-bold">Gründungskohorte bildet sich – Einladungen limitiert</h2>
          <p className="mt-2 text-black/70">Österreich & Deutschland – bald verfügbar. Sichere dir jetzt einen Platz.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 max-w-xl mx-auto" aria-live="polite">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={nameId} className="sr-only">Name</label>
                <input id={nameId} type="text" className="input" placeholder="Name (optional)" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor={emailId + "-2"} className="sr-only">E‑Mail</label>
                <input id={emailId + "-2"} type="email" required className="input" placeholder="E‑Mail‑Adresse" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor={noteId} className="sr-only">Notiz</label>
              <textarea id={noteId} className="textarea" placeholder="Notiz (optional)" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
            <div className="flex items-start gap-3">
              <input id={consentId + "-2"} type="checkbox" className="checkbox mt-0.5" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
              <label htmlFor={consentId + "-2"} className="text-sm text-black/70">
                Ich willige ein, dass meine Angaben gespeichert und zur Kontaktaufnahme über diesen Service verwendet werden.
              </label>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn btn-primary" disabled={!canSubmit}>{status === "submitting" ? "Sende…" : "Wartelistenplatz sichern"}</button>
              <div className="text-xs text-black/50 self-center">Plätze limitiert • Standard ab 49 € • Fast‑Track verfügbar</div>
            </div>
            {status === "success" && (
              <p className="text-sm text-green-700">Danke! Du stehst auf der Warteliste.</p>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-space">
        <div className="section-narrow">
          <h2 className="text-2xl sm:text-3xl font-bold">Häufige Fragen</h2>
          <div className="mt-6 grid gap-4">
            <details className="card">
              <summary className="font-medium cursor-pointer">Wird das von der Versicherung übernommen?</summary>
              <p className="mt-2 text-sm text-black/70">Wir starten als Selbstzahler‑Service. Optionen mit Versicherungen können folgen.</p>
            </details>
            <details className="card">
              <summary className="font-medium cursor-pointer">Wie schnell erhalte ich eine Antwort?</summary>
              <p className="mt-2 text-sm text-black/70">Standard unter 48 Stunden, Fast‑Track unter 12 Stunden.</p>
            </details>
            <details className="card">
              <summary className="font-medium cursor-pointer">Kann ich ein Rezept erhalten?</summary>
              <p className="mt-2 text-sm text-black/70">Ja, wenn es medizinisch sinnvoll ist, stellen wir ein Rezept aus – zur Abholung in deiner Apotheke.</p>
            </details>
            <details className="card">
              <summary className="font-medium cursor-pointer">Wo werden meine Daten gespeichert?</summary>
              <p className="mt-2 text-sm text-black/70">In der EU. Wir verkaufen deine Daten niemals.</p>
            </details>
            <details className="card">
              <summary className="font-medium cursor-pointer">Was ist mit auffälligen Muttermalen oder Warnzeichen?</summary>
              <p className="mt-2 text-sm text-black/70">Bei roten Flaggen oder Notfällen bitte sofort eine Notfallstelle aufsuchen. Unser Service ist nicht für Notfälle.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section section-space">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-black/70">
          <div>
            <div className="font-semibold">DermaCompanion</div>
            <p className="mt-2">Bald in Österreich & Deutschland. Pre‑Launch.</p>
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
