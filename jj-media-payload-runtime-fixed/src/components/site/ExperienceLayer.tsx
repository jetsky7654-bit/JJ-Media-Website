'use client'

import { useEffect } from 'react'

export function ExperienceLayer() {
  useEffect(() => {
    const root = document.documentElement
    const progress = document.querySelector<HTMLElement>('.scroll-progress > i')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')
    let frame = 0

    const updateScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const maximum = document.documentElement.scrollHeight - window.innerHeight
        const value = maximum > 0 ? Math.min(1, window.scrollY / maximum) : 0
        progress?.style.setProperty('--scroll-progress', String(value))
        root.style.setProperty('--page-y', `${window.scrollY}px`)
        frame = 0
      })
    }

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`)
      root.style.setProperty('--pointer-y', `${event.clientY}px`)
      root.style.setProperty('--pointer-x-ratio', String(event.clientX / window.innerWidth - 0.5))
      root.style.setProperty('--pointer-y-ratio', String(event.clientY / window.innerHeight - 0.5))
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(
      '.growth-system, .work-card, .pain-card, .offer-card, .post-card, .showreel-banner, .promise-card',
    ))
    const cleanups: Array<() => void> = []

    if (!reducedMotion.matches && finePointer.matches) {
      cards.forEach((card) => {
        card.classList.add('motion-3d')
        const move = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect()
          const x = (event.clientX - bounds.left) / bounds.width - 0.5
          const y = (event.clientY - bounds.top) / bounds.height - 0.5
          card.style.setProperty('--tilt-x', `${y * -7}deg`)
          card.style.setProperty('--tilt-y', `${x * 8}deg`)
          card.style.setProperty('--shine-x', `${(x + 0.5) * 100}%`)
          card.style.setProperty('--shine-y', `${(y + 0.5) * 100}%`)
          card.style.setProperty('--lift', '-7px')
        }
        const leave = () => {
          card.style.setProperty('--tilt-x', '0deg')
          card.style.setProperty('--tilt-y', '0deg')
          card.style.setProperty('--lift', '0px')
        }
        card.addEventListener('pointermove', move)
        card.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          card.removeEventListener('pointermove', move)
          card.removeEventListener('pointerleave', leave)
        })
      })
      window.addEventListener('pointermove', updatePointer, { passive: true })
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    window.addEventListener('resize', updateScroll, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('resize', updateScroll)
      window.removeEventListener('pointermove', updatePointer)
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <>
      <div aria-hidden="true" className="scroll-progress"><i/></div>
      <div aria-hidden="true" className="pointer-light"/>
      <div aria-hidden="true" className="site-grain"/>
    </>
  )
}
