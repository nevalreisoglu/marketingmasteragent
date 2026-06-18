export default function TopBar() {
  return (
    <div className="fixed top-0 left-56 right-0 h-14 bg-white shadow-sm flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold" style={{ color: '#FF6B00' }}>ETIYA</span>
        <span className="text-xl font-semibold text-gray-700">MARKETING CLOUD</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-600 border border-gray-200 rounded px-2 py-1 hover:bg-gray-50">EN</button>
        <button className="relative text-gray-500 hover:text-gray-700">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-bold">NR</div>
          <div className="text-right">
            <div className="text-xs font-semibold text-gray-800">Neval Reisoğlu</div>
            <div className="text-xs text-gray-500">Etiya Admin</div>
          </div>
        </div>
      </div>
    </div>
  )
}
