import React from 'react'

export function renderTextWithHighlights(text, className = 'gradientText') {
  if (text === null || text === undefined) return text

  const stringValue = String(text)
  const lines = stringValue.split(/\n/)
  const nodes = []
  let keyIndex = 0

  const pushLine = (line) => {
    const regex = /\[\[(.+?)\]\]/g
    let lastIndex = 0
    let match

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        nodes.push(line.slice(lastIndex, match.index))
      }
      nodes.push(
        <span className={className} key={`hl-${keyIndex++}`}>
          {match[1]}
        </span>
      )
      lastIndex = regex.lastIndex
    }

    if (lastIndex < line.length) {
      nodes.push(line.slice(lastIndex))
    }
  }

  lines.forEach((line, index) => {
    if (index > 0) {
      nodes.push(<br key={`br-${keyIndex++}`} />)
    }
    pushLine(line)
  })

  return nodes
}
