import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum & Datenschutz | Camperio",
  description: "Impressum, Datenschutzerklärung und Cookie-Hinweis der Camperio Wohnmobilvermietung.",
};

export default function Rechtliches() {
  return (
    <>
      {/* Minimal Navigation */}
      <nav className="bg-warm-white border-b border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-charcoal tracking-tight">
            Camperio
          </Link>
          <Link
            href="/"
            className="text-sm text-bark hover:text-accent transition-colors"
          >
            &larr; Zur Startseite
          </Link>
        </div>
      </nav>

      <main className="bg-warm-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal mb-12">
            Rechtliches
          </h1>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-sand">
            <a href="#impressum" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
              Impressum
            </a>
            <span className="text-sand">|</span>
            <a href="#datenschutz" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
              Datenschutz
            </a>
            <span className="text-sand">|</span>
            <a href="#cookies" className="text-sm font-medium text-accent hover:text-accent-hover transition-colors">
              Cookie-Hinweis
            </a>
          </div>

          {/* ==================== IMPRESSUM ==================== */}
          <section id="impressum" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Impressum</h2>

            <div className="prose-camperio space-y-4 text-bark leading-relaxed">
              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Angaben gem&auml;&szlig; &sect; 5 TMG
              </h3>
              <p>
                Max Mustermann
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">Kontakt</h3>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@example-camper.de"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  info@example-camper.de
                </a>
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV
              </h3>
              <p>
                Max Mustermann
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Streitschlichtung
              </h3>
              <p>
                Die Europ&auml;ische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Haftung f&uuml;r Inhalte
              </h3>
              <p>
                Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG
                f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
                oder gespeicherte fremde Informationen zu &uuml;berwachen oder
                nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
                T&auml;tigkeit hinweisen.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Haftung f&uuml;r Links
              </h3>
              <p>
                Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. F&uuml;r die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich. Eine permanente inhaltliche Kontrolle der
                verlinkten Seiten ist ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung au&szlig;erhalb der Grenzen des Urheberrechts
                bed&uuml;rfen der schriftlichen Zustimmung des Autors bzw.
                Erstellers.
              </p>
            </div>
          </section>

          {/* ==================== DATENSCHUTZ ==================== */}
          <section id="datenschutz" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Datenschutzerkl&auml;rung
            </h2>

            <div className="prose-camperio space-y-4 text-bark leading-relaxed">
              <h3 className="text-lg font-semibold text-charcoal mt-6">
                1. Verantwortlicher
              </h3>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO):
              </p>
              <p>
                Max Mustermann
                <br />
                Musterstraße 1
                <br />
                12345 Musterstadt
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:info@example-camper.de"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  info@example-camper.de
                </a>
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                2. Hosting
              </h3>
              <p>
                Diese Website wird bei Strato AG, Pascalstra&szlig;e 10, 10587
                Berlin, gehostet. Die Server von Strato erfassen automatisch
                Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
                beim Besuch der Website &uuml;bermittelt. Dies umfasst: IP-Adresse,
                Browsertyp und -version, Betriebssystem, Referrer-URL, Hostname des
                zugreifenden Rechners sowie Uhrzeit der Serveranfrage.
              </p>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengef&uuml;hrt.
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an einem sicheren Betrieb der
                Website).
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                3. Kontaktformular
              </h3>
              <p>
                Auf unserer Website befindet sich ein mehrstufiges Anfrageformular.
                Wenn Sie dieses Formular absenden, werden Ihre Angaben (Name,
                E-Mail-Adresse, Reisedaten, Nachricht) in eine E-Mail umgewandelt,
                die &uuml;ber Ihr lokales E-Mail-Programm gesendet wird
                (mailto-Funktion). Es findet{" "}
                <strong>keine serverseitige Speicherung</strong> Ihrer Formulardaten
                statt.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (vorvertragliche Ma&szlig;nahmen auf Anfrage der betroffenen
                Person).
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                4. Google Maps
              </h3>
              <p>
                Diese Website nutzt den Kartendienst Google Maps der Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland. Zur Nutzung
                der Google-Maps-Funktionen ist es notwendig, Ihre IP-Adresse zu
                speichern. Diese Informationen werden in der Regel an einen Server
                von Google in den USA &uuml;bertragen und dort gespeichert.
              </p>
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer
                ansprechenden Darstellung unseres Standorts. Dies stellt ein
                berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
                dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
                erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a
                DSGVO.
              </p>
              <p>
                N&auml;heres zum Umgang mit Nutzerdaten finden Sie in der{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Datenschutzerkl&auml;rung von Google
                </a>
                .
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                5. Externe Links
              </h3>
              <p>
                Diese Website enth&auml;lt Links zur Buchungsseite des Deutschen
                Caravan-Verbands (example-booking.de). Beim Klick auf diese
                Links verlassen Sie unsere Website. F&uuml;r die Datenverarbeitung
                auf externen Websites ist der jeweilige Betreiber verantwortlich.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                6. Keine Analyse- oder Tracking-Dienste
              </h3>
              <p>
                Diese Website verwendet <strong>keine</strong> Analyse- oder
                Tracking-Dienste wie Google Analytics, Facebook Pixel oder
                vergleichbare Tools. Es werden keine Nutzungsprofile erstellt.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                7. Ihre Rechte
              </h3>
              <p>
                Sie haben gegen&uuml;ber uns folgende Rechte hinsichtlich der Sie
                betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf L&ouml;schung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschr&auml;nkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Daten&uuml;bertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Zur Aus&uuml;bung Ihrer Rechte wenden Sie sich bitte per E-Mail an:{" "}
                <a
                  href="mailto:info@example-camper.de"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  info@example-camper.de
                </a>
              </p>
              <p>
                Sie haben zudem das Recht, sich bei einer
                Datenschutz-Aufsichtsbeh&ouml;rde &uuml;ber die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren. Die f&uuml;r Brandenburg
                zust&auml;ndige Aufsichtsbeh&ouml;rde ist die{" "}
                <a
                  href="https://www.lda.brandenburg.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  Landesbeauftragte f&uuml;r den Datenschutz und f&uuml;r das Recht
                  auf Akteneinsicht Brandenburg
                </a>
                .
              </p>
            </div>
          </section>

          {/* ==================== COOKIES ==================== */}
          <section id="cookies" className="mb-16 scroll-mt-8">
            <h2 className="text-2xl font-bold text-charcoal mb-6">
              Cookie-Hinweis
            </h2>

            <div className="prose-camperio space-y-4 text-bark leading-relaxed">
              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Was sind Cookies?
              </h3>
              <p>
                Cookies sind kleine Textdateien, die auf Ihrem Endger&auml;t
                gespeichert werden. Sie dienen dazu, bestimmte Funktionen einer
                Website zu erm&ouml;glichen oder Informationen &uuml;ber Ihr
                Nutzungsverhalten zu speichern.
              </p>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Welche Cookies verwenden wir?
              </h3>

              <div className="bg-white rounded-2xl border border-sand/50 p-6 my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sand">
                      <th className="text-left py-2 font-semibold text-charcoal">Cookie</th>
                      <th className="text-left py-2 font-semibold text-charcoal">Zweck</th>
                      <th className="text-left py-2 font-semibold text-charcoal">Typ</th>
                      <th className="text-left py-2 font-semibold text-charcoal">Dauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sand/50">
                      <td className="py-2 font-mono text-xs">camperio-cookies</td>
                      <td className="py-2">Speichert Ihre Cookie-Pr&auml;ferenz</td>
                      <td className="py-2">Notwendig</td>
                      <td className="py-2">Unbegrenzt (localStorage)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono text-xs">Google Maps Cookies</td>
                      <td className="py-2">Kartendarstellung des Standorts</td>
                      <td className="py-2">Drittanbieter</td>
                      <td className="py-2">Variiert (durch Google gesetzt)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-semibold text-charcoal mt-6">
                Ihre Einstellungen
              </h3>
              <p>
                Beim ersten Besuch unserer Website werden Sie &uuml;ber ein
                Cookie-Banner um Ihre Einwilligung gebeten. Sie k&ouml;nnen
                zwischen &quot;Alle akzeptieren&quot; und &quot;Nur notwendige&quot;
                w&auml;hlen. Ihre Wahl wird in Ihrem Browser gespeichert.
              </p>
              <p>
                Sie k&ouml;nnen Ihre Entscheidung jederzeit &auml;ndern, indem Sie
                die gespeicherten Daten in Ihrem Browser l&ouml;schen
                (Browsereinstellungen &rarr; Websitedaten l&ouml;schen). Beim
                n&auml;chsten Besuch wird das Cookie-Banner erneut angezeigt.
              </p>
            </div>
          </section>

          {/* Last updated */}
          <div className="pt-8 border-t border-sand text-sm text-bark/60">
            Letzte Aktualisierung: April 2026
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-charcoal text-white/60 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Camperio. Alle Rechte vorbehalten. &mdash;{" "}
          <Link href="/" className="hover:text-amber transition-colors">
            Zur Startseite
          </Link>
        </div>
      </footer>
    </>
  );
}
