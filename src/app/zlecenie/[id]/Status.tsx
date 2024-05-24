"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Status({status, serviceId, setFinished}: {boolean, number, (number)}) {
  const router = useRouter();
  return (
    <>
      <button className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition text-white rounded-md shadow-md mt-2" onChange={() => {
        setFinished(serviceId);
        router.refresh()
      }}>Zakończ</button>
    </>
  )
}
