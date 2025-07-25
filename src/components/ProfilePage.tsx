"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, LinkIcon } from "lucide-react"

type Props = {
  setCurrentView: (view: string) => void
}

export default function ProfilePage({ setCurrentView }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 lg:hidden">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setCurrentView("feed")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Sarah Chen</h1>
            <p className="text-sm text-gray-500">1,234 posts</p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute -bottom-16 left-4">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarImage src="/placeholder.svg?height=128&width=128&text=SC" alt="Sarah Chen" />
            <AvatarFallback className="text-2xl">SC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-20 px-4 pb-4">
        <div className="flex justify-end mb-4">
          <Button className="rounded-full px-6">Follow</Button>
        </div>

        <div className="space-y-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sarah Chen</h1>
            <p className="text-gray-500">@sarahchen</p>
          </div>

          <p className="text-gray-900">
            Product Designer & Frontend Developer. Building beautiful, accessible interfaces. Coffee enthusiast ☕
            Currently working on something exciting.
          </p>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <LinkIcon className="h-4 w-4" />
              <span>sarahchen.dev</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>Joined March 2020</span>
            </div>
          </div>

          <div className="flex space-x-6 text-sm">
            <div>
              <span className="font-bold text-gray-900">1,234</span>
              <span className="text-gray-500 ml-1">Following</span>
            </div>
            <div>
              <span className="font-bold text-gray-900">5,678</span>
              <span className="text-gray-500 ml-1">Followers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          {["Posts", "Media", "Likes"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-4 text-center font-medium transition-colors ${
                tab === "Posts"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Placeholder */}
      <div className="p-8 text-center text-gray-500">
        <p>This section is under development.</p>
      </div>
    </div>
  )
}
