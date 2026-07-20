'use client'

import { useState } from 'react'

const items = [
  { category: 'Reise', format: 'REEL', image: '/assets/insta-5.webp', title: 'Erlebnisse, die Fernweh auslösen', text: 'Emotionaler Travel Content mit klarem nächsten Schritt' },
  { category: 'UGC', format: '9:16', image: '/assets/insta-1.webp', title: 'Nahbar statt werblich', text: 'Creator Content für Vertrauen und Social Proof' },
  { category: 'Brand', format: 'POST', image: '/assets/insta-4.webp', title: 'Marke mit Wiedererkennung', text: 'Visuelle Systeme für konsistente Kommunikation' },
  { category: 'UGC', format: 'REEL', image: '/assets/insta-3.webp', title: 'Produkte im echten Kontext', text: 'Authentische Anwendung statt klassischer Werbespot' },
  { category: 'Strategie', format: 'CAROUSEL', image: '/assets/insta-2.webp', title: 'Komplexes klar erklärt', text: 'Expertencontent, der Kompetenz sichtbar macht' },
]

export function UGCShowcase() {
  const categories = ['Alle', ...Array.from(new Set(items.map((item) => item.category)))]
  const [activeCategory, setActiveCategory] = useState('Alle')
  const visibleItems = activeCategory === 'Alle' ? items : items.filter((item) => item.category === activeCategory)

  return (
    <div>
      <div aria-label="Showcase filtern" className="filter-row">
        {categories.map((category) => (
          <button
            className={activeCategory === category ? 'is-active' : ''}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
      <div className="ugc-grid">
        {visibleItems.map((item, index) => (
          <article className={`ugc-card reveal${index === 0 ? ' ugc-card-featured' : ''}`} key={`${item.category}-${item.title}`}>
            <img alt={item.title} loading="lazy" src={item.image}/>
            <div className="ugc-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <b aria-hidden="true" className="ugc-format">{item.format}</b>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
