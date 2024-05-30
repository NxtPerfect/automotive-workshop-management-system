"use client";
import { signOut } from 'next-auth/react';
import React from 'react'

export default function Logout() {
  return (
    <button type="button" onClick={() => { signOut(); }} className="bg-purple-600 hover:bg-purple-700 active:bg-purple-500 transition text-white rounded-md shadow-md px-4 py-1">Wyloguj</button>
  )
}
