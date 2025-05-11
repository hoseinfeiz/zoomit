"use client";
import { MonitorSmartphone } from 'lucide-react'
import React from 'react'
import { Button } from './ui'
import Link from 'next/link'

const Welcome = () => {
  return (
    <div className='mt-4 flex flex-col justify-center gap-2'>
        <span>Welcome to</span>
        <div className='flex justify-center items-center gap-2'>
            <MonitorSmartphone />
            <span className='text-gray-500 font-bold'>Digital Shop</span>

        </div>
        <Button asChild >
            <Link href="/products">go to products</Link>

        </Button>
    </div>
  )
}

export default Welcome