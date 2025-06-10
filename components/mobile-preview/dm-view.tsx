import { ArrowLeft, Phone, Video, User, ImageIcon, MessageSquare, Plus } from "lucide-react"

interface DMViewProps {
  openingDMEnabled: boolean
  openingDMMessage: string
  followUpMessage: string
  userMessages: string[]
}

export function DMView({ openingDMEnabled, openingDMMessage, followUpMessage, userMessages }: DMViewProps) {
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

        {/* DM Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 text-white" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-white font-medium text-xs">botspacehq</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-white" />
            <Video className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-4 py-3 space-y-2 pb-16 overflow-y-auto">
          {/* Opening DM message (left side - bot) */}
          {openingDMEnabled && openingDMMessage && (
            <div className="bg-gray-800 rounded-2xl rounded-bl-md p-2 max-w-[180px]">
              <p className="text-white text-xs">{openingDMMessage}</p>
            </div>
          )}

          {/* Follow-up message (right side - user) */}
          {followUpMessage && (
            <div className="bg-blue-500 rounded-2xl rounded-br-md p-2 max-w-[180px] ml-auto">
              <p className="text-white text-xs">{followUpMessage}</p>
            </div>
          )}

          {/* User custom messages (left side - bot responses) */}
          {userMessages.map((message, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl rounded-bl-md p-2 max-w-[180px]">
              <p className="text-white text-xs">{message}</p>
            </div>
          ))}
        </div>

        {/* Message input - Updated with grayish border */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black">
          <div className="flex items-center gap-3">
            {/* Blue camera icon on the left */}
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>

            {/* Message input field with grayish border */}
            <div className="flex-1 bg-gray-800 border border-gray-600 rounded-full px-3 py-1.5 flex items-center">
              <span className="text-gray-400 text-xs">Message...</span>
            </div>

            {/* Right side icons */}
            <div className="flex gap-3">
              <ImageIcon className="w-5 h-5 text-gray-400" />
              <MessageSquare className="w-5 h-5 text-gray-400" />
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
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
