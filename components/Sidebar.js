'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: '⊞' },
  { label: 'Program', href: '/program', icon: '◈' },
  { label: 'Campaign', href: '/campaigns', icon: '📢' },
  { label: 'Content', href: '/content', icon: '📄' },
  { label: 'Segmentation', href: '/segmentation', icon: '◎' },
  { label: 'Datamart', href: '/datamart', icon: '🗄' },
  { label: 'Parameters', href: '/parameters', icon: '⚙' },
  { label: 'Journey Builder', href: '/journey', icon: '🗺' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-56 bg-white h-screen fixed left-0 top-0 shadow-md flex flex-col z-10">
      <div className="p-4 border-b border-gray-100">
        <div className="text-xs font-bold text-gray-400 tracking-widest">NAVIGATION</div>
      </div>
      <nav className="flex-1 py-2">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700 border-r-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <div className="text-xs text-gray-400">v2.4.1</div>
      </div>
    </div>
  )
}
