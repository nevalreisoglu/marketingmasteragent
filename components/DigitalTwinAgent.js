'use client'
import DonutChart from './DonutChart'
import ChurnGauge from './ChurnGauge'
import ThresholdWarnings from './ThresholdWarnings'
import { evaluateWarnings } from '../lib/thresholds'

export default function DigitalTwinAgent({ segment }) {
  if (!segment) {
    return (
      <div className="bg-white rounded-xl shadow p-6 border border-gray-100 h-full flex flex-col items-center justify-center text-center">
        <div className="text-4xl mb-3">🤖</div>
        <h3 className="text-base font-semibold text-gray-700 mb-1">Digital Twin Agent</h3>
        <p className="text-sm text-gray-400">Select a Target Segment to activate the Digital Twin Agent analysis.</p>
      </div>
    )
  }

  const warnings = evaluateWarnings(segment)
  const riskColors = {
    HIGH: 'bg-red-500 text-white',
    MEDIUM: 'bg-orange-500 text-white',
    LOW: 'bg-green-500 text-white',
  }

  return (
    <div className="bg-white rounded-xl shadow border border-gray-100 overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
        <div>
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">Digital Twin Agent Analysis</div>
          <div className="text-sm font-semibold mt-0.5">Analyzing: {segment.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{segment.description}</div>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded ${riskColors[segment.risk]}`}>
          {segment.risk} RISK
        </span>
      </div>

      <div className="grid grid-cols-2 divide-x divide-y divide-gray-100 border-b border-gray-100">
        <div className="p-3">
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Group Share</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{segment.groupShare}%</div>
        </div>
        <div className="p-3">
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Avg Contract</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{segment.avgContract} <span className="text-sm font-normal text-gray-500">months</span></div>
        </div>
        <div className="p-3">
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Expected Purchase</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">${segment.expectedPurchase}</div>
        </div>
        <div className="p-3">
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Average Tenure</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{segment.averageTenure} <span className="text-sm font-normal text-gray-500">months</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 p-3 gap-2">
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2 text-center">CLV Segments</div>
          <DonutChart bronze={segment.clv.bronze} silver={segment.clv.silver} platinum={segment.clv.platinum} />
        </div>
        <div>
          <div className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2 text-center">Churn Probability</div>
          <ChurnGauge value={segment.churnProbability} />
        </div>
      </div>

      <div className="p-4">
        <ThresholdWarnings warnings={warnings} />
      </div>
    </div>
  )
}
