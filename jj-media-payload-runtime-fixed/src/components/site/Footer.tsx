import Link from 'next/link'
export function Footer({ settings }: { settings?: any }) {
  const email = settings?.email || 'service@jj-media.info'
  return <footer><div className="container"><div className="footer-main"><div><div className="eyebrow">Kontakt</div><a className="footer-email" href={`mailto:${email}`}>{email}</a></div><div className="footer-links"><Link href="/">Start</Link><Link href="/projekte">Projekte</Link><Link href="/leistungen">Leistungen</Link><Link href="/ueber-mich">Über mich</Link><Link href="/kontakt">Kontakt</Link><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JJ-Media.</span><span><a href={settings?.instagramURL||'#'}>Instagram</a> · <a href={settings?.linkedinURL||'#'}>LinkedIn</a></span></div></div></footer>
}
