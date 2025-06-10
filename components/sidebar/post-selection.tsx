"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

interface PostSelectionProps {
  postSelection: string
  setPostSelection: (value: string) => void
  selectedPost: number | null
  setSelectedPost: (id: number) => void
  mockPosts: any[]
  currentTab: string
  onNext: () => void
}

export function PostSelection({
  postSelection,
  setPostSelection,
  selectedPost,
  setSelectedPost,
  mockPosts,
  currentTab,
  onNext,
}: PostSelectionProps) {
  return (
    <div className="pb-4">
      <h3 className="font-medium text-base mb-3">1. Select a post</h3>
      <RadioGroup value={postSelection} onValueChange={setPostSelection}>
        <div className="flex items-center space-x-2 mb-3">
          <RadioGroupItem value="specific" id="specific" />
          <Label htmlFor="specific" className="font-medium text-sm">
            a specific post or reel
          </Label>
        </div>
      </RadioGroup>

      {postSelection === "specific" && (
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-2 mb-2">
            {mockPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post.id)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedPost === post.id ? "border-blue-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={`Post ${post.id}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <Button variant="link" className="text-blue-500 p-0 h-auto font-normal text-sm">
            Show All
          </Button>
        </div>
      )}

      <RadioGroup value={postSelection} onValueChange={setPostSelection}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="any" id="any" />
              <Label htmlFor="any" className="text-sm">
                any post or reel
              </Label>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
              PRO
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="next" id="next" />
              <Label htmlFor="next" className="text-sm">
                next post or reel
              </Label>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
              PRO
            </Badge>
          </div>
        </div>
      </RadioGroup>

      {currentTab === "post" && (
        <div className="mt-4">
          <Button
            onClick={onNext}
            disabled={!selectedPost}
            className="w-full bg-gray-900 hover:bg-gray-800 text-sm py-1.5"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
