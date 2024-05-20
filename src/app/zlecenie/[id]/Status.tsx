"use client";
import React from 'react'

export default function Status({status, serviceId, setFinished}: {boolean, number, (number)}) {
  return (
    <>
      <button className="bg-purple-500 text-white rounded-md shadow-md mt-2" onChange={() => setFinished(serviceId)}>Zakończ</button>
    </>
  )
}
