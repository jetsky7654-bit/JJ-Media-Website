'use client'
import { useEffect } from 'react'
export function Reveal() {
  useEffect(()=>{
    const els=[...document.querySelectorAll('.reveal')]
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12})
    els.forEach(el=>observer.observe(el)); return()=>observer.disconnect()
  },[])
  return null
}
