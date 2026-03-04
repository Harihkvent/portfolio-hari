import { useState, useEffect, useRef } from 'react'

/**
 * Animates from 0 → `target` over `duration` ms once the element enters
 * the viewport. Returns `{ displayValue, ref }`.
 * `suffix` (e.g. "+") is appended after the number.
 */
export function useCountUp(target, { duration = 1200, decimals = 0, suffix = '' } = {}) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const frames = Math.round(duration / 16)
    let frame = 0
    const timer = setInterval(() => {
      frame++
      // easeOutQuad
      const progress = 1 - Math.pow(1 - frame / frames, 2)
      const current = target * progress
      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
      if (frame >= frames) {
        setValue(target)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration, decimals])

  const displayValue = decimals > 0 ? value.toFixed(decimals) : value
  return { displayValue: displayValue + suffix, ref }
}
