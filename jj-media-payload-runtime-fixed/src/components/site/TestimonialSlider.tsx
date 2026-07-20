'use client'
import { useState } from 'react'
export function TestimonialSlider({ items }: { items: any[] }) {
  const [index,setIndex]=useState(0); const item=items[index] || items[0]
  if(!item)return null
  const next=()=>setIndex((index+1)%items.length), prev=()=>setIndex((index-1+items.length)%items.length)
  return <div className="testimonial-shell"><div className="testimonial-photo reveal"><img src={item.image} alt={`Portrait von ${item.name}`} /></div><div className="reveal"><div className="quote-mark">“</div><div className="quote">„{item.quote}“</div><div className="person"><strong>{item.name}</strong><span>{item.role}{item.company?` · ${item.company}`:''}</span></div><div className="slider-controls"><button className="circle-btn" onClick={prev} aria-label="Vorherige Kundenstimme">←</button><button className="circle-btn" onClick={next} aria-label="Nächste Kundenstimme">→</button></div></div></div>
}
