"use client"

import { MessageSquare, Heart, Share, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "/placeholder.svg?height=40&width=40&text=SC",
    },
    timestamp: "2h",
    content:
      "Just shipped a new feature! The team worked incredibly hard on this one. Excited to see how users respond to the new design patterns we've implemented.",
    image: "/placeholder.svg?height=300&width=500&text=Feature+Screenshot",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    user: {
      name: "Alex Rivera",
      username: "alexrivera",
      avatar: "/placeholder.svg?height=40&width=40&text=AR",
    },
    timestamp: "4h",
    content:
      "Beautiful sunset from my morning run. Sometimes the best inspiration comes from stepping away from the screen.",
    likes: 156,
    comments: 23,
  },
  {
    id: 3,
    user: {
      name: "Maya Patel",
      username: "mayapatel",
      avatar: "/placeholder.svg?height=40&width=40&text=MP",
    },
    timestamp: "6h",
    content:
      "Working on some exciting new designs for our upcoming product launch. The intersection of functionality and aesthetics never gets old.",
    image: "/placeholder.svg?height=400&width=600&text=Design+Mockup",
    likes: 89,
    comments: 12,
  },
]

export default function PostFeed() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 lg:hidden">
        <h1 className="text-xl font-bold text-gray-900">Home</h1>
      </div>

      <div className="divide-y divide-gray-100">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-b border-gray-100 p-4 hover:bg-gray-50/50 transition-colors"
          >
            <div className="flex space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.user.avatar} alt={post.user.name} />
                <AvatarFallback>
                  {post.user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-semibold text-gray-900">{post.user.name}</span>
                  <span className="text-gray-500">@{post.user.username}</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">{post.timestamp}</span>
                  <div className="ml-auto">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-gray-900 text-sm leading-relaxed">{post.content}</p>

                  {post.image && (
                    <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200">
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-4 max-w-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full px-3 py-1.5"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full px-3 py-1.5"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center space-x-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-full px-3 py-1.5"
                    >
                      <Share className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
