"use client"
import { Button } from '@/components/ui/button'
import { urlSplitter } from '@/lib';
import { FileQuestion } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    const lang = urlSplitter(pathname)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
            <FileQuestion className="w-24 h-24 text-muted-foreground mb-8" />
            <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Button className='text-white bg-emerald-700 hover:bg-emerald-800' asChild>
                <Link href={`/${lang}`}>
                    Return to Home
                </Link>
            </Button>
        </div>
    )
}