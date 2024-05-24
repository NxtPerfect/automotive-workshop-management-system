"use client"
import React from 'react'
import { useFormState } from 'react-dom'
import { authenticate } from '../lib/actions'

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <form action={dispatch}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" minLength={7} maxLength={64}></input>
      <label htmlFor="password">Hasło</label>
      <input type="password" name="password" minLength={6} maxLength={64}></input>
      <LoginButton />
      {errorMessage && (
        <>
          <span className="text-red-500 text-sm">{errorMessage}</span>
        </>
      )}
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormState();
  return (
    <button type="submit" aria-disabled={pending}>Zaloguj</button>
  )
}
