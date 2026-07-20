'use client'

import { useState } from 'react'

export type FAQItem = {
  question: string
  answer: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!items?.length) return null

  return (
    <div className="premium-faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`

        return (
          <article className={`premium-faq-item${isOpen ? ' is-open' : ''}`} key={item.question}>
            <button
              aria-controls={panelId}
              aria-expanded={isOpen}
              className="premium-faq-question"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span><small>{String(index + 1).padStart(2, '0')}</small>{item.question}</span>
              <span aria-hidden="true" className="faq-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <div className="premium-faq-answer" id={panelId}><p>{item.answer}</p></div> : null}
          </article>
        )
      })}
    </div>
  )
}
