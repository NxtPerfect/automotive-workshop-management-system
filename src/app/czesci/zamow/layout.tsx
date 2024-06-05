import { getParts } from '@/app/utils'
import React from 'react'

export default async function Layout({ children }: { children: React.ReactNode }) {
  const parts = await getParts()
  return (
    <main className="flex flex-col justify-items-center items-center h-full w-full">
      {children}
    </main>
  )
}
