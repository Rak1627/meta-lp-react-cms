export function ensureScript(src, onError) {
  if (typeof document === 'undefined') return

  const existing = document.querySelector(`script[src="${src}"]`)
  if (existing) return

  const script = document.createElement('script')
  script.src = src
  script.async = true

  // Add error handling
  script.onerror = () => {
    console.error(`Failed to load script: ${src}`)
    if (typeof onError === 'function') {
      onError(new Error(`Failed to load script: ${src}`))
    }
  }

  document.head.appendChild(script)
}

