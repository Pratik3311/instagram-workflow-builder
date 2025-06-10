"use client"

interface TabNavigationProps {
  currentTab: string
  setCurrentTab: (tab: string) => void
}

export function TabNavigation({ currentTab, setCurrentTab }: TabNavigationProps) {
  return (
    <div className="flex justify-center mt-4 mb-8">
      <div className="bg-gray-200 rounded-full p-1 flex">
        <button
          onClick={() => setCurrentTab("post")}
          className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentTab === "post" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
          }`}
        >
          Post
        </button>
        <button
          onClick={() => setCurrentTab("comments")}
          className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentTab === "comments" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
          }`}
        >
          Comments
        </button>
        <button
          onClick={() => setCurrentTab("dm")}
          className={`px-6 py-1.5 rounded-full text-sm font-medium transition-colors ${
            currentTab === "dm" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
          }`}
        >
          DM
        </button>
      </div>
    </div>
  )
}
