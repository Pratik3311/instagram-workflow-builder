"use client"

import { useState, useEffect } from "react"
import { PostView } from "@/components/mobile-preview/post-view"
import { CommentsView } from "@/components/mobile-preview/comments-view"
import { DMView } from "@/components/mobile-preview/dm-view"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { TabNavigation } from "@/components/navigation/tab-navigation"
import { mockPosts } from "@/lib/mock-data"

export default function InstagramWorkflowBuilder() {
  const [currentTab, setCurrentTab] = useState("post") // post, comments, dm
  const [selectedPost, setSelectedPost] = useState<number | null>(null)
  const [postSelection, setPostSelection] = useState("specific")
  const [commentKeywords, setCommentKeywords] = useState("")
  const [keywordMode, setKeywordMode] = useState("specific")
  const [openingDMEnabled, setOpeningDMEnabled] = useState(true)
  const [openingDMMessage, setOpeningDMMessage] = useState(
    "Hey there! I'm so happy you're here, thanks so much for your interest 😊\n\nClick below and I'll send you the link in just a sec ✨",
  )
  const [followUpMessage, setFollowUpMessage] = useState("Send me the link")
  const [showCommentsAnimation, setShowCommentsAnimation] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [userMessages, setUserMessages] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const selectedPostData = selectedPost ? mockPosts.find((p) => p.id === selectedPost) : mockPosts[0]

  // Check if all required fields are filled to enable Go Live button
  useEffect(() => {
    const isPostSelected = selectedPost !== null
    const hasCommentKeywords = keywordMode === "any" || (keywordMode === "specific" && commentKeywords.trim() !== "")
    const hasDMConfig = openingDMEnabled && openingDMMessage.trim() !== ""

    // All three sections must be completed
    setIsComplete(isPostSelected && hasCommentKeywords && hasDMConfig)
  }, [selectedPost, keywordMode, commentKeywords, openingDMEnabled, openingDMMessage])

  const handleGoLive = () => {
    if (!isComplete) {
      alert("Please complete all sections before going live!")
      return
    }

    console.log("Workflow going live!", {
      selectedPost,
      postSelection,
      commentKeywords,
      keywordMode,
      openingDMEnabled,
      openingDMMessage,
      followUpMessage,
    })
    alert("Workflow is now live! 🚀")
  }

  const handlePostNext = () => {
    if (selectedPost) {
      setCurrentTab("comments")
      setTimeout(() => setShowCommentsAnimation(true), 100)
    }
  }

  const handleCommentsNext = () => {
    setCurrentTab("dm")
  }

  const handleDMNext = () => {
    if (userInput.trim()) {
      setUserMessages([...userMessages, userInput])
      setUserInput("")
    }
  }

  const renderMobilePreview = () => {
    if (currentTab === "post" && selectedPostData) {
      return <PostView post={selectedPostData} />
    }

    if (currentTab === "comments" && selectedPostData) {
      return (
        <CommentsView post={selectedPostData} commentKeyword={commentKeywords} showAnimation={showCommentsAnimation} />
      )
    }

    if (currentTab === "dm") {
      return (
        <DMView
          openingDMEnabled={openingDMEnabled}
          openingDMMessage={openingDMMessage}
          followUpMessage={followUpMessage}
          userMessages={userMessages}
        />
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        postSelection={postSelection}
        setPostSelection={setPostSelection}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        mockPosts={mockPosts}
        currentTab={currentTab}
        keywordMode={keywordMode}
        setKeywordMode={setKeywordMode}
        commentKeywords={commentKeywords}
        setCommentKeywords={setCommentKeywords}
        openingDMEnabled={openingDMEnabled}
        setOpeningDMEnabled={setOpeningDMEnabled}
        openingDMMessage={openingDMMessage}
        setOpeningDMMessage={setOpeningDMMessage}
        followUpMessage={followUpMessage}
        setFollowUpMessage={setFollowUpMessage}
        userInput={userInput}
        setUserInput={setUserInput}
        onPostNext={handlePostNext}
        onCommentsNext={handleCommentsNext}
        onDMNext={handleDMNext}
      />

      {/* Main Content - Fixed Mobile Preview */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header onGoLive={handleGoLive} isComplete={isComplete} />

        {/* Preview Area - Fixed Mobile Screen */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
          <div className="flex-1 flex items-center justify-center">{renderMobilePreview()}</div>
          <TabNavigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
      </div>
    </div>
  )
}
