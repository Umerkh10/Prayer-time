"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SunanDownloadDialog } from "./sunan-download-dialog"

interface Book {
  title: string
  filename: string
  fileSize: string
}

interface BookListProps {
  books: Book[]
}

export function SunanBookList({ books }: BookListProps) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [showDialog, setShowDialog] = useState(false)

  const handleDownloadClick = (book: Book) => {
    setSelectedBook(book)
    setShowDialog(true)
  }

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File Size
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{book.title}</div>
                  <div className="text-sm text-gray-500">{book.filename}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.fileSize}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button
                    onClick={() => handleDownloadClick(book)}
                    className="bg-[#1e3a5f] hover:bg-[#2a4d7a]"
                    size="sm"
                  >
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedBook && <SunanDownloadDialog isOpen={showDialog} onClose={() => setShowDialog(false)} book={selectedBook} />}
    </div>
  )
}
