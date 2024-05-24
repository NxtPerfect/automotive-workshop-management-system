"use client"
import React from 'react'
import { useFormState } from 'react-dom'
import { authenticate } from '../lib/actions'

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch} className="flex flex-col max-w-[40ch] p-8 bg-purple-500 rounded-md mt-4 justify-center">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" className="text-black text-lg px-2 py-1 rounded-md" minLength={7} maxLength={64}></input>
      <label htmlFor="password">Hasło</label>
      <input type="password" name="password" className="text-black text-lg px-2 py-1 rounded-md" minLength={6} maxLength={64}></input>
      <LoginButton />
      {errorMessage && (
        <>
          <span className="text-red-500 text-sm" aria-live='polite' aria-atomic='true'>{errorMessage}</span>
        </>
      )}
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormState();
  return (
    <button type="submit" className="bg-purple-700 hover:bg-purple-800 active:bg-purple-600 text-lg rounded-md shadow-md text-white transition mt-4 px-2" aria-disabled={pending}>Zaloguj</button>
  )
}
