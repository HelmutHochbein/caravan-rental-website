export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <p className="text-2xl font-bold text-white mb-2">Camperio</p>
            <p className="text-sm text-white/60">
              Wohnmobilvermietung in Brandenburg
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-white mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#fahrzeug" className="hover:text-amber transition-colors">Fahrzeug</a></li>
              <li><a href="#galerie" className="hover:text-amber transition-colors">Galerie</a></li>
              <li><a href="#vorteile" className="hover:text-amber transition-colors">Vorteile</a></li>
              <li><a href="#buchung" className="hover:text-amber transition-colors">Anfrage</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-3">Kontakt</p>
            <ul className="space-y-2 text-sm">
              <li>Musterstadt</li>
              <li>
                <a
                  href="mailto:info@example-camper.de"
                  className="hover:text-amber transition-colors"
                >
                  info@example-camper.de
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-semibold text-white mb-3">Rechtliches</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/rechtliches#impressum" className="hover:text-amber transition-colors">Impressum</a></li>
              <li><a href="/rechtliches#datenschutz" className="hover:text-amber transition-colors">Datenschutz</a></li>
              <li><a href="/rechtliches#cookies" className="hover:text-amber transition-colors">Cookie-Hinweis</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Camperio. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
