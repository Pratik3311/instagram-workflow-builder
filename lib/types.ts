export interface Post {
  id: number
  image: string
  username: string
  caption: string
  likes: string
  timeAgo: string
  comments: number
}

export interface WorkflowState {
  currentTab: string
  selectedPost: number | null
  postSelection: string
  commentKeywords: string
  keywordMode: string
  openingDMEnabled: boolean
  openingDMMessage: string
  followUpMessage: string
  userInput: string
  userMessages: string[]
}
