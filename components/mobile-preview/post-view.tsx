import Image from "next/image"
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Home, Search, PlusSquare, User } from "lucide-react"

interface PostViewProps {
  post: {
    id: number
    image: string
    username: string
    caption: string
    likes: string
    timeAgo: string
    comments: number
  }
}

export function PostView({ post }: PostViewProps) {
  return (
    <div className="bg-black rounded-[2.5rem] p-1 w-[280px] h-[580px]">
      <div className="bg-black rounded-[2rem] h-full overflow-hidden relative">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-2 text-white text-xs">
          <span className="font-medium">1:37</span>
          <div className="flex items-center gap-1">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
            <div className="w-6 h-3 border border-white rounded-sm">
              <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* Instagram header */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-white font-medium text-xs">{post.username}</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-white" />
        </div>

        {/* Post image */}
        <div className="aspect-square bg-gray-800 relative">
          {post.image && (
            <Image src={post.image || "/placeholder.svg"} alt="Instagram post" fill className="object-cover" />
          )}
        </div>

        {/* Post actions */}
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-white" />
            <MessageCircle className="w-5 h-5 text-white" />
            <Send className="w-5 h-5 text-white" />
          </div>
          <Bookmark className="w-5 h-5 text-white" />
        </div>

        {/* Post info */}
        <div className="px-4 pb-3">
          <p className="text-white font-medium text-xs mb-1">{post.likes} likes</p>
          <div className="text-white text-xs">
            <span className="font-medium">{post.username}</span>
            <span className="ml-1">{post.caption}</span>
          </div>
          {post.comments > 0 && <p className="text-gray-400 text-xs mt-1">View all {post.comments} comments</p>}
          <p className="text-gray-400 text-xs mt-1">{post.timeAgo}</p>
        </div>

        {/* Bottom navigation */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around py-2 bg-black border-t border-gray-800">
          <Home className="w-5 h-5 text-white" />
          <Search className="w-5 h-5 text-gray-500" />
          <PlusSquare className="w-5 h-5 text-gray-500" />
          <Heart className="w-5 h-5 text-gray-500" />
          <User className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  )
}
