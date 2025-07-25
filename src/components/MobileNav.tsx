"use client"

import { Home, Search, MessageCircle, Bell, User } from "lucide-react"

type Props = {
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

export default function MobileNav({ currentView, setCurrentView }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 lg:hidden z-50">
      <div className="flex justify-around">
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
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg ${
              (item.label === "Home" && currentView === "feed") ||
              (item.label === "Profile" && currentView === "profile")
                ? "text-gray-900"
                : "text-gray-500"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
