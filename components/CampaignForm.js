'use client'
import { useState } from 'react'
import { segments } from '../lib/segments'

export default function CampaignForm({ onSegmentChange }) {
  const [form, setForm] = useState({
    name: '',
    category: '',
    subCategory: '',
    campaignType: 'Offer',
    labelName: '',
    deliveryStatus: '',
    campaignStatus: 'Active',
    datamart: '',
    targetSegment: '',
    startDate: '',
    endDate: '',
  })

  const campaignId = 'CMP-' + Math.floor(Math.random() * 9000 + 1000)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name === 'targetSegment') {
      const seg = segments.find((s) => s.id === parseInt(value))
      onSegmentChange(seg || null)
    }
  }

  const inputCls = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent bg-white"
  const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1"

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className={labelCls}>Campaign Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter campaign name" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>Campaign ID</label>
        <input type="text" value={campaignId} readOnly className={`${inputCls} bg-gray-50 text-gray-400 cursor-not-allowed`} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Category</label>
          <select name="category" value={form.category} onChange={handleChange} className={inputCls}>
            <option value="">Select...</option>
            <option>Retention</option>
            <option>Acquisition</option>
            <option>Upsell</option>
            <option>Cross-sell</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Sub Category</label>
          <select name="subCategory" value={form.subCategory} onChange={handleChange} className={inputCls}>
            <option value="">Select...</option>
            <option>Bundle Offer</option>
            <option>Loyalty</option>
            <option>Discount</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Campaign Type</label>
          <select name="campaignType" value={form.campaignType} onChange={handleChange} className={inputCls}>
            <option>Offer</option>
            <option>Info</option>
            <option>Discount</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Campaign Label Name</label>
          <select name="labelName" value={form.labelName} onChange={handleChange} className={inputCls}>
            <option value="">Select...</option>
            <option>Spring Promo</option>
            <option>Black Friday</option>
            <option>Loyalty Reward</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Delivery Status</label>
          <select name="deliveryStatus" value={form.deliveryStatus} onChange={handleChange} className={inputCls}>
            <option value="">Select...</option>
            <option>Email</option>
            <option>SMS</option>
            <option>Push Notification</option>
            <option>All Channels</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Campaign Status</label>
          <select name="campaignStatus" value={form.campaignStatus} onChange={handleChange} className={inputCls}>
            <option>Active</option>
            <option>Draft</option>
            <option>Expired</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Datamart</label>
        <select name="datamart" value={form.datamart} onChange={handleChange} className={inputCls}>
          <option value="">Select...</option>
          <option>Customer360</option>
          <option>Telecom_DM</option>
          <option>RetailMart</option>
        </select>
      </div>

      <div>
        <label className={`${labelCls} text-green-700`}>Target Segment ⚡</label>
        <select name="targetSegment" value={form.targetSegment} onChange={handleChange} className={`${inputCls} border-green-300 focus:ring-green-500`}>
          <option value="">— Select a segment to activate Digital Twin —</option>
          {segments.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        {form.targetSegment && (
          <p className="text-xs text-green-600 mt-1">✓ Digital Twin Agent analyzing segment...</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelCls}>Start Date</label>
          <input type="date" name="startDate" value={form.startDate} onChange={handleChange} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>End Date</label>
          <input type="date" name="endDate" value={form.endDate} onChange={handleChange} className={inputCls} />
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors">
          Create Campaign
        </button>
        <button type="button" className="px-4 py-2.5 border border-gray-200 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors">
          Save Draft
        </button>
      </div>
    </form>
  )
}
