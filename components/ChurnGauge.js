'use client'

export default function ChurnGauge({ value }) {
  const size = 120
  const cx = size / 2
  const cy = size / 2 + 10
  const r = 42
  const strokeWidth = 14

  function polarToCartesian(cx, cy, r, angleDeg) {
    const rad = (angleDeg * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  const trackStart = polarToCartesian(cx, cy, r, 180)
  const trackEnd = polarToCartesian(cx, cy, r, 0)

  const valueAngle = 180 - (value / 100) * 180
  const valueEnd = polarToCartesian(cx, cy, r, valueAngle)

  const getColor = (v) => {
    if (v >= 65) return '#EF4444'
    if (v >= 50) return '#F59E0B'
    return '#4CAF50'
  }

  const color = getColor(value)

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size * 0.7} viewBox={`0 0 ${size} ${size * 0.7}`}>
        <path
          d={`M ${trackStart.x} ${trackStart.y} A ${r} ${r} 0 0 1 ${trackEnd.x} ${trackEnd.y}`}
          fill="none" stroke="#f0f0f0" strokeWidth={strokeWidth} strokeLinecap="round"
        />
        {value > 0 && (
          <path
            d={`M ${trackStart.x} ${trackStart.y} A ${r} ${r} 0 ${value > 50 ? 1 : 0} 1 ${valueEnd.x} ${valueEnd.y}`}
            fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"
          />
        )}
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="16" fontWeight="bold" fill={color}>{value}%</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize="8" fill="#888">CHURN RISK</text>
      </svg>
    </div>
  )
}
