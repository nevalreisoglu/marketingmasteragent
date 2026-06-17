import Sidebar from '../../components/Sidebar'
import TopBar from '../../components/TopBar'
import CampaignList from '../../components/CampaignList'

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <TopBar />
      <main className="ml-56 pt-14">
        <div className="px-8 py-6">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <span>DASHBOARD</span>
            <span>&gt;</span>
            <span className="text-green-600 font-semibold">CAMPAIGNS</span>
          </div>
          <CampaignList />
        </div>
      </main>
    </div>
  )
}
