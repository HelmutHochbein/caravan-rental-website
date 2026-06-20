"use client";

import { useState } from "react";

interface FormData {
  persons: string;
  duration: string;
  experience: string;
  message: string;
  email: string;
  name: string;
}

const steps = [
  { label: "Personen", number: 1 },
  { label: "Dauer", number: 2 },
  { label: "Erfahrung", number: 3 },
  { label: "Kontakt", number: 4 },
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    persons: "",
    duration: "",
    experience: "",
    message: "",
    email: "",
    name: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const canNext = () => {
    if (step === 1) return !!data.persons;
    if (step === 2) return !!data.duration;
    if (step === 3) return !!data.experience;
    if (step === 4) return !!data.email && !!data.name;
    return false;
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent("Anfrage Wohnmobil Camperio");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPersonen: ${data.persons}\nDauer: ${data.duration}\nWohnmobil-Erfahrung: ${data.experience}\n\nNachricht:\n${data.message}`
    );
    window.location.href = `mailto:info@example-camper.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✉️</div>
        <h3 className="text-2xl font-bold text-charcoal mb-2">Vielen Dank!</h3>
        <p className="text-bark">
          Ihr E-Mail-Programm sollte sich geöffnet haben. Bitte senden Sie die
          vorausgefüllte E-Mail ab. Wir melden uns schnellstmöglich bei Ihnen.
        </p>
        <button
          onClick={() => { setSubmitted(false); setStep(1); setData({ persons: "", duration: "", experience: "", message: "", email: "", name: "" }); }}
          className="mt-6 text-accent hover:text-accent-hover font-medium underline"
        >
          Neue Anfrage starten
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {steps.map((s, i) => (
          <div key={s.number} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s.number
                  ? "bg-accent text-white"
                  : "bg-sand text-bark"
              }`}
            >
              {s.number}
            </div>
            {i < steps.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-0.5 mx-1 transition-colors ${
                  step > s.number ? "bg-accent" : "bg-sand"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="min-h-[200px]">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal">Wie viele Personen reisen?</h3>
            <div className="grid grid-cols-5 gap-3">
              {["1", "2", "3", "4", "5"].map((n) => (
                <button
                  key={n}
                  onClick={() => update("persons", n)}
                  className={`py-3 rounded-xl font-semibold transition-all ${
                    data.persons === n
                      ? "bg-accent text-white shadow-md"
                      : "bg-sand/50 text-charcoal hover:bg-sand"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal">Wie lange möchten Sie reisen?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["1 Woche", "2 Wochen", "3+ Wochen"].map((d) => (
                <button
                  key={d}
                  onClick={() => update("duration", d)}
                  className={`py-4 rounded-xl font-semibold transition-all ${
                    data.duration === d
                      ? "bg-accent text-white shadow-md"
                      : "bg-sand/50 text-charcoal hover:bg-sand"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal">
              Haben Sie bereits Wohnmobil-Erfahrung?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Ja", "Nein"].map((exp) => (
                <button
                  key={exp}
                  onClick={() => update("experience", exp)}
                  className={`py-4 rounded-xl font-semibold transition-all ${
                    data.experience === exp
                      ? "bg-accent text-white shadow-md"
                      : "bg-sand/50 text-charcoal hover:bg-sand"
                  }`}
                >
                  {exp === "Ja" ? "Ja, Erfahrung vorhanden" : "Nein, Erstfahrer"}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-charcoal">Ihre Kontaktdaten</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ihr Name"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <textarea
              placeholder="Ihre Nachricht (optional) — z.B. Wunschtermin, Reiseziel, Fragen..."
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-sand bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
            />
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            step === 1
              ? "invisible"
              : "text-bark hover:text-charcoal"
          }`}
        >
          Zurück
        </button>
        {step < 4 ? (
          <button
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={!canNext()}
            className="bg-accent hover:bg-accent-hover disabled:bg-sand disabled:text-bark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Weiter
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext()}
            className="bg-accent hover:bg-accent-hover disabled:bg-sand disabled:text-bark text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Anfrage absenden
          </button>
        )}
      </div>
    </div>
  );
}
