// File: src/App.tsx
"use client"
import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import PostFeed from "@/components/PostFeed"
import ProfilePage from "@/components/ProfilePage"
import MobileNav from "@/components/MobileNav"

export default function App() {
  const [currentView, setCurrentView] = useState("feed")

  return (
    <div className="min-h-screen bg-white">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />

      <main className="lg:ml-64 pb-16 lg:pb-0">
        {currentView === "feed" ? (
          <PostFeed />
        ) : currentView === "profile" ? (
          <ProfilePage setCurrentView={setCurrentView} />
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>This page is under construction</p>
          </div>
        )}
      </main>

      <MobileNav currentView={currentView} setCurrentView={setCurrentView} />
    </div>
  )
}
