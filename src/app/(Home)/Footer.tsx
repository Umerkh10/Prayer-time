import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="mt-5 border-t border-muted-foreground bg-transparent">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Global Salah</h2>
            <p className="mt-2 text-sm text-muted-foreground ">
              Global Salah is a website dedicated to providing accurate and convenient Islamic prayer time information to Muslims around the world.
            </p>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li > <Link href="/" className=" hover:text-blue-700 dark:hover:text-blue-400">Home</Link></li>
              <li > <Link href="./#namaz-time" className=" hover:text-blue-700 dark:hover:text-blue-400">Namaz Time</Link></li>
              <li > <Link href="/islamic-calender" className=" hover:text-blue-700 dark:hover:text-blue-400">Islamic Calender</Link></li>
              <li > <Link href="/duas" className=" hover:text-blue-700 dark:hover:text-blue-400">Duas</Link></li>
        
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
                <li ><Link href="/countries" className=" hover:text-blue-700 dark:hover:text-blue-400">Countries</Link></li>
                <li><Link href="/about-us" className=" hover:text-blue-700 dark:hover:text-blue-400">About Us</Link></li>
                <li><Link href="/contact-us" className=" hover:text-blue-700 dark:hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">Other</h3>
            <ul className="mt-4 space-y-3 text-sm">
                <li ><Link href="/terms-and-conditions" className=" hover:text-blue-700 dark:hover:text-blue-400">
                  Terms and conditions</Link>
                </li>
                <li ><Link href="/privacy-policy" className=" hover:text-blue-700 dark:hover:text-blue-400">
                  Privacy policy</Link>
                </li>
 
            </ul>
          </div>

          {/* <div className="lg:col-span-1">
            <h3 className="text-base font-semibold text-blue-700 dark:text-blue-400">Popular cities</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                'Prayer times in Paris',
                'Prayer times in London',
                'Prayer times in Dallas',
                'Prayer times in Dubai',
                'Prayer times in Jeddah',
                'Prayer times in Riyadh',
                'Prayer times in Lahore',
                'Prayer times in Istanbul',
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className=" hover:text-blue-700 dark:hover:text-blue-400">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              All Rights Reserved © 2025 Global Salah
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer