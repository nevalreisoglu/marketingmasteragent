export default function ThresholdWarnings({ warnings }) {
  if (!warnings || warnings.length === 0) return null

  const getBg = (level) => {
    if (level === 'critical') return 'bg-red-50 border-red-200'
    if (level === 'warning') return 'bg-yellow-50 border-yellow-200'
    return 'bg-green-50 border-green-200'
  }

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-500 text-base">⚠️</span>
        <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Threshold Warnings</h4>
      </div>
      <div className="space-y-2">
        {warnings.map((w, i) => (
          <div key={i} className={`flex items-start gap-2 p-2 rounded border text-xs ${getBg(w.level)}`}>
            <span className="mt-0.5 shrink-0">{w.icon}</span>
            <span className="text-gray-700">{w.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
