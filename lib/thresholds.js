export const thresholds = {
  churnProbability: { warning: 50, critical: 65 },
  bronzeCLV: { warning: 30, critical: 40 },
  avgContract: { warning: 6, critical: 3 },
  expectedPurchase: { warning: 80, critical: 50 },
  groupShare: { min: 10, max: 40 }
}

export function evaluateWarnings(segment) {
  const warnings = []

  if (segment.churnProbability >= thresholds.churnProbability.critical) {
    warnings.push({ level: 'critical', message: `Churn Probability ${segment.churnProbability}% exceeds critical threshold (${thresholds.churnProbability.critical}%)`, icon: '🔴' })
  } else if (segment.churnProbability >= thresholds.churnProbability.warning) {
    warnings.push({ level: 'warning', message: `Churn Probability ${segment.churnProbability}% exceeds warning threshold (${thresholds.churnProbability.warning}%)`, icon: '🟡' })
  } else {
    warnings.push({ level: 'ok', message: `Churn Probability ${segment.churnProbability}% within normal range`, icon: '🟢' })
  }

  if (segment.clv.bronze >= thresholds.bronzeCLV.critical) {
    warnings.push({ level: 'critical', message: `Bronze CLV segment ${segment.clv.bronze}% exceeds critical limit (${thresholds.bronzeCLV.critical}%)`, icon: '🔴' })
  } else if (segment.clv.bronze >= thresholds.bronzeCLV.warning) {
    warnings.push({ level: 'warning', message: `Bronze CLV segment ${segment.clv.bronze}% above warning limit (${thresholds.bronzeCLV.warning}%)`, icon: '🟡' })
  } else {
    warnings.push({ level: 'ok', message: `Bronze CLV segment ${segment.clv.bronze}% within normal range`, icon: '🟢' })
  }

  if (segment.expectedPurchase <= thresholds.expectedPurchase.critical) {
    warnings.push({ level: 'critical', message: `Expected Purchase $${segment.expectedPurchase} below critical threshold ($${thresholds.expectedPurchase.critical})`, icon: '🔴' })
  } else if (segment.expectedPurchase <= thresholds.expectedPurchase.warning) {
    warnings.push({ level: 'warning', message: `Expected Purchase $${segment.expectedPurchase} below warning threshold ($${thresholds.expectedPurchase.warning})`, icon: '🟡' })
  } else {
    warnings.push({ level: 'ok', message: `Expected Purchase $${segment.expectedPurchase} within normal range`, icon: '🟢' })
  }

  if (segment.avgContract <= thresholds.avgContract.critical) {
    warnings.push({ level: 'critical', message: `Avg Contract ${segment.avgContract} months below critical threshold (${thresholds.avgContract.critical} months)`, icon: '🔴' })
  } else if (segment.avgContract <= thresholds.avgContract.warning) {
    warnings.push({ level: 'warning', message: `Avg Contract ${segment.avgContract} months below warning threshold (${thresholds.avgContract.warning} months)`, icon: '🟡' })
  } else {
    warnings.push({ level: 'ok', message: `Avg Contract ${segment.avgContract} months within normal range`, icon: '🟢' })
  }

  return warnings
}
