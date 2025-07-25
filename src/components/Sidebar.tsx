"use client"

import { Home, Search, MessageCircle, Bell, User } from "lucide-react"

type SidebarProps = {
  currentView: string
  setCurrentView: (view: string) => void
}

const sidebarItems = [
  { icon: Home, label: "Home" },
  { icon: Search, label: "Explore" },
  { icon: MessageCircle, label: "Messages" },
  { icon: Bell, label: "Notifications" },
  { icon: User, label: "Profile" },
]

export default function Sidebar({ currentView, setCurrentView }: SidebarProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4 hidden lg:block">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-900">Synq</h1>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              if (item.label === "Profile") {
                setCurrentView("profile")
              } else if (item.label === "Home") {
                setCurrentView("feed")
              }
            }}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-full text-left transition-colors ${
              (item.label === "Home" && currentView === "feed") ||
              (item.label === "Profile" && currentView === "profile")
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
