"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

interface DMConfigurationProps {
  openingDMEnabled: boolean
  setOpeningDMEnabled: (value: boolean) => void
  openingDMMessage: string
  setOpeningDMMessage: (value: string) => void
  followUpMessage: string
  setFollowUpMessage: (value: string) => void
  userInput: string
  setUserInput: (value: string) => void
  currentTab: string
  onNext: () => void
}

export function DMConfiguration({
  openingDMEnabled,
  setOpeningDMEnabled,
  openingDMMessage,
  setOpeningDMMessage,
  followUpMessage,
  setFollowUpMessage,
  userInput,
  setUserInput,
  currentTab,
  onNext,
}: DMConfigurationProps) {
  const isDisabled = currentTab === "post" || currentTab === "comments"

  return (
    <div className={`${isDisabled ? "opacity-50" : ""}`}>
      <h3 className="font-medium text-base mb-3">3. They will get</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="opening-dm" className="font-medium text-sm">
            an opening DM
          </Label>
          <Switch
            id="opening-dm"
            checked={openingDMEnabled}
            onCheckedChange={setOpeningDMEnabled}
            disabled={isDisabled}
          />
        </div>

        {openingDMEnabled && (
          <Textarea
            placeholder="Hey there! I'm so happy you're here, thanks so much for your interest 😊"
            value={openingDMMessage}
            onChange={(e) => setOpeningDMMessage(e.target.value)}
            className="min-h-[80px] resize-none text-sm"
            disabled={isDisabled}
          />
        )}

        <div className="text-xs text-gray-600">Send me the link</div>

        <div>
          <Label className="font-medium block mb-2 text-sm">a DM with the link</Label>
          <Textarea
            placeholder="Write a message"
            value={followUpMessage}
            onChange={(e) => setFollowUpMessage(e.target.value)}
            className="min-h-[60px] resize-none mb-2 text-sm"
            disabled={isDisabled}
          />
          <Button variant="outline" className="w-full mb-3 text-sm py-1" disabled={isDisabled}>
            <Plus className="w-3 h-3 mr-1" />
            Add A Link
          </Button>
        </div>

        {/* Third input for custom message */}
        {currentTab === "dm" && (
          <div>
            <Label htmlFor="user-input" className="font-medium block mb-2 text-sm">
              Add custom response
            </Label>
            <div className="flex gap-2">
              <Input
                id="user-input"
                placeholder="Enter your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 text-sm py-1"
              />
              <Button
                onClick={onNext}
                disabled={!userInput.trim()}
                size="sm"
                className="bg-gray-600 hover:bg-gray-700 text-xs py-1"
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
