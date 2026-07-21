'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { defaultNavigation } from '@/lib/fallback'

export function Header({ navigation }: { navigation?: any }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const configuredItems = navigation?.items?.length ? navigation.items : defaultNavigation
  const items = configuredItems.some((item: any) => item.href === '/methode')
    ? configuredItems
    : [...configuredItems.slice(0, 1), { label: 'Methode', href: '/methode' }, ...configuredItems.slice(1)]
  const ctaLabel = navigation?.ctaLabel || 'Social Score starten'
  const ctaHref = navigation?.ctaHref || '/social-media-audit'
  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <nav className="nav" aria-label="Hauptnavigation"><div className="container nav-inner">
      <Link className="logo" href="/"><span className="logo-mark">JJ</span><span>JJ—MEDIA</span></Link>
      <div className="nav-links">{items.map((item:any)=><Link key={item.href} href={item.href} aria-current={pathname===item.href?'page':undefined}>{item.label}</Link>)}</div>
      <a className="btn desktop" href={ctaHref}>{ctaLabel} <span>↗</span></a>
      <button className="menu-btn" onClick={()=>setOpen(true)} aria-label="Menü öffnen" aria-expanded={open}>☰</button>
    </div></nav>
    <div className={`menu-overlay ${open?'open':''}`} aria-hidden={!open}>
      <button className="menu-close" onClick={()=>setOpen(false)} aria-label="Menü schließen">×</button>
      {items.map((item:any)=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>)}
      <a className="btn" href={ctaHref} onClick={()=>setOpen(false)}>{ctaLabel} ↗</a>
    </div>
  </>
}
