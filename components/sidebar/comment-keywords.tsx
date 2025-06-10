"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

interface CommentKeywordsProps {
  keywordMode: string
  setKeywordMode: (value: string) => void
  commentKeywords: string
  setCommentKeywords: (value: string) => void
  currentTab: string
  onNext: () => void
}

export function CommentKeywords({
  keywordMode,
  setKeywordMode,
  commentKeywords,
  setCommentKeywords,
  currentTab,
  onNext,
}: CommentKeywordsProps) {
  // Function to add a keyword to the input
  const addKeyword = (keyword: string) => {
    if (commentKeywords) {
      // Check if keyword already exists to avoid duplicates
      const keywords = commentKeywords.split(",").map((k) => k.trim())
      if (!keywords.includes(keyword)) {
        setCommentKeywords(commentKeywords + ", " + keyword)
      }
    } else {
      setCommentKeywords(keyword)
    }
  }

  return (
    <div className={`pb-4 ${currentTab === "post" ? "opacity-50" : ""}`}>
      <h3 className="font-medium text-base mb-3">2. And this comment has</h3>

      <RadioGroup value={keywordMode} onValueChange={setKeywordMode} disabled={currentTab === "post"}>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="specific" id="specific-words" />
            <Label htmlFor="specific-words" className="font-medium text-sm">
              a specific word or words
            </Label>
          </div>

          {keywordMode === "specific" && (
            <div className="ml-6 space-y-2">
              <Input
                placeholder="Price"
                value={commentKeywords}
                onChange={(e) => setCommentKeywords(e.target.value)}
                className="w-full text-sm py-1"
                disabled={currentTab === "post"}
              />
              <p className="text-xs text-gray-500">Use commas to separate words</p>
              <div className="space-y-1">
                <p className="text-xs text-gray-600">For example:</p>
                <div className="flex gap-1 flex-wrap">
                  <Badge
                    variant="outline"
                    className="text-xs py-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => addKeyword("Price")}
                  >
                    Price
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs py-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => addKeyword("Link")}
                  >
                    Link
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs py-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => addKeyword("Shop")}
                  >
                    Shop
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs py-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => addKeyword("Info")}
                  >
                    Info
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs py-0.5 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => addKeyword("Details")}
                  >
                    Details
                  </Badge>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <RadioGroupItem value="any" id="any-word" />
            <Label htmlFor="any-word" className="text-sm">
              any word
            </Label>
          </div>
        </div>
      </RadioGroup>

      {currentTab === "comments" && (
        <div className="mt-4">
          <Button onClick={onNext} className="w-full bg-gray-900 hover:bg-gray-800 text-sm py-1.5">
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
