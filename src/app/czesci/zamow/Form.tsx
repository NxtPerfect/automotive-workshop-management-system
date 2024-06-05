"use client"
import { addPart } from '@/app/utils'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Form({ partId, addParts}) {
  const router = useRouter();
  async function handleSubmit(e: HTMLFormElement) {
    e.preventDefault();
    const formData = new FormData(e.target);
    await addParts(partId, Number.parseInt(formData.get("quantity")))
      .then(router.refresh());
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row bg-purple-500" >
      <input className="text-black" name="quantity" type="number" min={1} max={99}></input>
      <button type="submit">Dodaj</button>
    </form>
  )
}
