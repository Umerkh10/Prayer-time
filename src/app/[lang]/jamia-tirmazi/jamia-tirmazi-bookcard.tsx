"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import CustomCaptcha from "@/components/ui/common/CustomCaptcha"

interface BookCardProps {
  title: string
  description: string
  filePath: string
  fileSize: string
}

export function JamiaTirmaziBookCard({ title, description, filePath, fileSize }: BookCardProps) {
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const downloadLinkRef = useRef<HTMLAnchorElement>(null)

  const filename = filePath.split("/").pop() || ""

  useEffect(() => {
    if (isVerified && downloadLinkRef.current) {
      downloadLinkRef.current.click()

      const timer = setTimeout(() => {
        setIsVerified(false)
        setShowCaptcha(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [isVerified])

  const handleVerification = (verified: boolean) => {
    setIsVerifying(false)
    setIsVerified(verified)
  }

  const startVerification = () => {
    setShowCaptcha(true)
    setIsVerifying(true)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-emerald-700 text-white">
        <CardTitle className="flex items-center gap-2">
          <FileText size={18} />
          {title}
        </CardTitle>
        <CardDescription className="text-gray-200">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">File Size:</span>
            <span className="font-medium">{fileSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">File:</span>
            <span className="font-medium">{filename}</span>
          </div>
        </div>

        {showCaptcha && !isVerified && (
          <div className="mt-4 p-4 border rounded-md bg-gray-50">
            <CustomCaptcha setIsVerified={handleVerification} />
          </div>
        )}

        <a ref={downloadLinkRef} href={filePath} download={filename} className="hidden" />
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button
          onClick={startVerification}
          disabled={isVerifying || (showCaptcha && !isVerified)}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
        >
          <Download className="h-4 w-4 mr-2" />
          {!showCaptcha ? "Download" : isVerifying ? "Verifying..." : isVerified ? "Downloading..." : "Verify Captcha"}
        </Button>
      </CardFooter>
    </Card>
  )
}
