'use client'
import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '../../../components/Sidebar'
import TopBar from '../../../components/TopBar'
import CampaignForm from '../../../components/CampaignForm'
import DigitalTwinAgent from '../../../components/DigitalTwinAgent'

export default function NewCampaignPage() {
  const [selectedSegment, setSelectedSegment] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <TopBar />
      <main className="ml-56 pt-14">
        <div className="px-8 py-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/campaigns" className="hover:text-green-600 transition-colors">DASHBOARD</Link>
            <span>&gt;</span>
            <Link href="/campaigns" className="hover:text-green-600 transition-colors">CAMPAIGNS</Link>
            <span>&gt;</span>
            <span className="text-green-600 font-semibold">NEW CAMPAIGN</span>
          </div>

          <div className="flex gap-6">
            <div className="w-[480px] shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1 h-6 bg-green-600 rounded-full"></div>
                  <h2 className="text-base font-bold text-gray-800">Create New Campaign</h2>
                </div>
                <CampaignForm onSegmentChange={setSelectedSegment} />
              </div>
            </div>

            <div className="flex-1">
              <div className="sticky top-20">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base">🤖</span>
                  <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Digital Twin Agent</h3>
                  {selectedSegment && (
                    <span className="ml-auto text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full font-semibold animate-pulse">
                      ANALYZING
                    </span>
                  )}
                </div>
                <DigitalTwinAgent segment={selectedSegment} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
