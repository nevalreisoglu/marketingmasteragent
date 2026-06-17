'use client'
import Link from 'next/link'

const campaigns = [
  { id: 313, name: 'Budget Conscious Streamers Retention', code: 'BCR-313', type: 'Offer', status: 'Active' },
  { id: 312, name: 'High-Value Gamers Content Plus Value Pack Campaign', code: 'HVGC-312', type: 'Offer', status: 'Active' },
  { id: 307, name: 'Budget Conscious Streamers Retention Campaign', code: 'BCRC-307', type: 'Offer', status: 'Active' },
  { id: 306, name: 'High-Value Gamers Content Plus Value Pack', code: 'HVGCP-306', type: 'Offer', status: 'Active' },
  { id: 305, name: 'catalog agent notif', code: 'CAN-305', type: 'Info', status: 'Expired' },
  { id: 303, name: 'High-Value Gamers Black Friday Content Plus', code: 'HVGBF-303', type: 'Offer', status: 'Expired' },
]

export default function CampaignList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div>
          <h2 className="text-base font-semibold text-gray-800">Campaigns</h2>
          <p className="text-xs text-gray-400 mt-0.5">{campaigns.length} campaigns total</p>
        </div>
        <Link href="/campaigns/new" className="flex items-center justify-center w-9 h-9 rounded-full text-white text-xl font-bold shadow hover:opacity-90 transition-opacity" style={{ backgroundColor: '#4CAF50' }} title="Create New Campaign">
          +
        </Link>
      </div>

      <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 flex gap-3">
        <input type="text" placeholder="Search campaigns..." className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white flex-1 max-w-xs" />
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none bg-white text-gray-600">
          <option>All Types</option><option>Offer</option><option>Info</option><option>Discount</option>
        </select>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none bg-white text-gray-600">
          <option>All Status</option><option>Active</option><option>Expired</option><option>Draft</option>
        </select>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wide border-b border-gray-100">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Campaign ID</th>
            <th className="px-6 py-3">Code</th>
            <th className="px-6 py-3">Campaign Type</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {campaigns.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <Link href="/campaigns/new" className="text-sm font-medium text-gray-800 hover:text-green-700 transition-colors">{c.name}</Link>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{c.id}</td>
              <td className="px-6 py-4 text-sm text-gray-500 font-mono">{c.code}</td>
              <td className="px-6 py-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.type === 'Offer' ? 'bg-blue-50 text-blue-700' : 'bg-purple-50 text-purple-700'}`}>{c.type}</span>
              </td>
              <td className="px-6 py-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{c.status}</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-blue-500 transition-colors" title="Analytics">📊</button>
                  <button className="text-gray-400 hover:text-green-500 transition-colors" title="Add">➕</button>
                  <button className="text-gray-400 hover:text-yellow-500 transition-colors" title="Pause">⏸</button>
                  <button className="text-gray-400 hover:text-orange-500 transition-colors" title="Reset">🔄</button>
                  <button className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">🗑</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
