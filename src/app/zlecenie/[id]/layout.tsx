import { getJobsForService, getService } from '@/app/utils';
import React from 'react'

export default async function Layout({ children, params } : {children: React.ReactNode; params: {id: number}}) {
  const service = await getService(Number.parseInt(params.id))
  const jobs = await getJobsForService(Number.parseInt(params.id))
  return (
    <main className="flex flex-col justify-items-center items-center h-full w-full">
      {children}
    </main>
  )
}
