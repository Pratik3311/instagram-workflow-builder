"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  onGoLive: () => void
  isComplete: boolean
}

export function Header({ onGoLive, isComplete }: HeaderProps) {
  return (
    <div className="bg-white px-6 py-3 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium">Preview</h2>
      </div>
      <Button
        onClick={onGoLive}
        disabled={!isComplete}
        className={
          isComplete
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 cursor-not-allowed"
        }
      >
        Go Live
      </Button>
    </div>
  )
}
