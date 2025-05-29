"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import CustomCaptcha from "@/components/ui/common/CustomCaptcha"

interface Book {
  title: string
  filename: string
  fileSize: string
}

interface DownloadDialogProps {
  isOpen: boolean
  onClose: () => void
  book: Book
}

export function DownloadDialog({ isOpen, onClose, book }: DownloadDialogProps) {
  const [isVerified, setIsVerified] = useState(false)

  const handleDownload = () => {
    if (!isVerified) return

    const filePath = `/pdfs/${book.filename}`

    const link = document.createElement("a")
    link.href = filePath
    link.download = book.filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify Captcha to Download</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {!isVerified ? (
            <CustomCaptcha setIsVerified={setIsVerified} />
          ) : (
            <div className="space-y-4">
              <div className="text-center text-green-600 font-medium">
                Verification successful! You can now download the file.
              </div>
              <div className="flex justify-center">
                <Button onClick={handleDownload} className="bg-[#1e3a5f] hover:bg-[#2a4d7a]">
                  Download {book.title}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
