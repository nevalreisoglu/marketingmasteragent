'use client'

export default function DonutChart({ bronze, silver, platinum }) {
  const size = 120
  const cx = size / 2
  const cy = size / 2
  const r = 40
  const strokeWidth = 20

  function polarToCartesian(cx, cy, r, angleDeg) {
    const rad = ((angleDeg - 90) * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
  }

  function arcPath(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, startAngle)
    const end = polarToCartesian(cx, cy, r, endAngle)
    const largeArc = endAngle - startAngle > 180 ? 1 : 0
    return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`
  }

  const bronzeAngle = (bronze / 100) * 360
  const silverAngle = (silver / 100) * 360
  const platinumAngle = (platinum / 100) * 360

  const bronzeStart = 0
  const bronzeEnd = bronzeAngle
  const silverStart = bronzeEnd
  const silverEnd = silverStart + silverAngle
  const platinumStart = silverEnd
  const platinumEnd = platinumStart + platinumAngle

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f0f0f0" strokeWidth={strokeWidth} />
        <path d={arcPath(cx, cy, r, bronzeStart, bronzeEnd)} fill="none" stroke="#CD7F32" strokeWidth={strokeWidth} strokeLinecap="butt" />
        <path d={arcPath(cx, cy, r, silverStart, silverEnd)} fill="none" stroke="#9E9E9E" strokeWidth={strokeWidth} strokeLinecap="butt" />
        <path d={arcPath(cx, cy, r, platinumStart, platinumEnd - 0.1)} fill="none" stroke="#B0BEC5" strokeWidth={strokeWidth} strokeLinecap="butt" />
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize="10" fill="#555" fontWeight="bold">CLV</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fill="#888">MIX</text>
      </svg>
      <div className="flex gap-3 mt-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#CD7F32' }}></div>
          <span className="text-gray-600">Bronze {bronze}%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#9E9E9E' }}></div>
          <span className="text-gray-600">Silver {silver}%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#B0BEC5' }}></div>
          <span className="text-gray-600">Platinum {platinum}%</span>
        </div>
      </div>
    </div>
  )
}
