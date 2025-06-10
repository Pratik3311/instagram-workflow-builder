import { PostSelection } from "@/components/sidebar/post-selection"
import { CommentKeywords } from "@/components/sidebar/comment-keywords"
import { DMConfiguration } from "@/components/sidebar/dm-configuration"

interface SidebarProps {
  postSelection: string
  setPostSelection: (value: string) => void
  selectedPost: number | null
  setSelectedPost: (id: number) => void
  mockPosts: any[]
  currentTab: string
  keywordMode: string
  setKeywordMode: (value: string) => void
  commentKeywords: string
  setCommentKeywords: (value: string) => void
  openingDMEnabled: boolean
  setOpeningDMEnabled: (value: boolean) => void
  openingDMMessage: string
  setOpeningDMMessage: (value: string) => void
  followUpMessage: string
  setFollowUpMessage: (value: string) => void
  userInput: string
  setUserInput: (value: string) => void
  onPostNext: () => void
  onCommentsNext: () => void
  onDMNext: () => void
}

export function Sidebar({
  postSelection,
  setPostSelection,
  selectedPost,
  setSelectedPost,
  mockPosts,
  currentTab,
  keywordMode,
  setKeywordMode,
  commentKeywords,
  setCommentKeywords,
  openingDMEnabled,
  setOpeningDMEnabled,
  openingDMMessage,
  setOpeningDMMessage,
  followUpMessage,
  setFollowUpMessage,
  userInput,
  setUserInput,
  onPostNext,
  onCommentsNext,
  onDMNext,
}: SidebarProps) {
  return (
    <div className="w-80 bg-white flex flex-col max-h-screen">
      {/* Sidebar Header - No border */}
      <div className="p-4 flex-shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <h1 className="font-semibold text-lg">When someone comments on</h1>
        </div>
      </div>

      {/* Sidebar Content - Scrollable */}
      <div className="flex-1 p-4 overflow-y-auto space-y-6">
        <PostSelection
          postSelection={postSelection}
          setPostSelection={setPostSelection}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          mockPosts={mockPosts}
          currentTab={currentTab}
          onNext={onPostNext}
        />

        <CommentKeywords
          keywordMode={keywordMode}
          setKeywordMode={setKeywordMode}
          commentKeywords={commentKeywords}
          setCommentKeywords={setCommentKeywords}
          currentTab={currentTab}
          onNext={onCommentsNext}
        />

        <DMConfiguration
          openingDMEnabled={openingDMEnabled}
          setOpeningDMEnabled={setOpeningDMEnabled}
          openingDMMessage={openingDMMessage}
          setOpeningDMMessage={setOpeningDMMessage}
          followUpMessage={followUpMessage}
          setFollowUpMessage={setFollowUpMessage}
          userInput={userInput}
          setUserInput={setUserInput}
          currentTab={currentTab}
          onNext={onDMNext}
        />
      </div>
    </div>
  )
}
