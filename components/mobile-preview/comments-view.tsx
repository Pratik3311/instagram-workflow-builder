import Image from "next/image"
import { ArrowLeft, Heart, MoreHorizontal, User, Share, Plus } from "lucide-react"

interface CommentsViewProps {
  post: {
    id: number
    image: string
    username: string
  }
  commentKeyword: string
  showAnimation: boolean
}

export function CommentsView({ post, commentKeyword, showAnimation }: CommentsViewProps) {
  // Display all keywords in a single comment, comma-separated
  const displayKeywords = commentKeyword || "Price"

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

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-white" />
            <div className="text-center">
              <p className="text-gray-400 text-xs">BOTSPACEHQ</p>
              <p className="text-white text-xs font-medium">Posts</p>
            </div>
          </div>
        </div>

        {/* Post preview - Made smaller */}
        <div className="px-4 py-1">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User className="w-2 h-2 text-white" />
              </div>
            </div>
            <span className="text-white font-medium text-xs">{post.username}</span>
            <MoreHorizontal className="w-3 h-3 text-white ml-auto" />
          </div>

          {/* Mini post image - Made smaller */}
          <div className="aspect-video bg-gray-800 relative mb-1 rounded-lg overflow-hidden h-24">
            {post.image && (
              <Image src={post.image || "/placeholder.svg"} alt="Instagram post" fill className="object-cover" />
            )}
          </div>
        </div>

        {/* Comments section - Positioned much more downwards */}
        <div
          className={`transition-all duration-500 ease-out ${
            showAnimation ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          } absolute top-48 bottom-20 left-0 right-0 bg-black rounded-t-3xl`}
        >
          <div className="px-4 py-3 h-full flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium text-sm">Comments</span>
              <Share className="w-4 h-4 text-white" />
            </div>

            {/* Single comment with all keywords */}
            <div className="flex items-start gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-gray-600"></div>
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <span className="text-white text-xs font-medium">Username</span>
                  <span className="text-gray-400 text-xs">Now</span>
                </div>
                <p className="text-white text-xs">{displayKeywords}</p>
                <p className="text-gray-400 text-xs mt-0.5">Reply</p>
              </div>
              <Heart className="w-3 h-3 text-gray-400" />
            </div>

            {/* Spacer to push content to bottom */}
            <div className="flex-1"></div>
          </div>
        </div>

        {/* Emoji reactions - Positioned above comment input */}
        <div className="absolute bottom-12 left-0 right-0 px-4 py-2">
          <div className="flex gap-3 text-lg justify-start">
            <span>❤️</span>
            <span>🙌</span>
            <span>🔥</span>
            <span>👏</span>
            <span>😢</span>
            <span>😍</span>
            <span>😮</span>
            <span>😂</span>
          </div>
        </div>

        {/* Comment input - Fixed at bottom with grayish border */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black">
          <div className="flex items-center gap-2 bg-gray-800 border border-gray-600 rounded-full px-3 py-1.5">
            <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center">
              <Plus className="w-3 h-3 text-white" />
            </div>
            <div className="flex-1 text-gray-400 text-xs">Add a comment for username...</div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
          <div className="h-1 bg-white rounded-full w-32"></div>
        </div>
      </div>
    </div>
  )
}
