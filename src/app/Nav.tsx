import { signOut } from 'next-auth/react';
import React from 'react'
import Logout from './Logout';

export default function Nav({ session }) {
  if (!session) {
    return (
      <nav className="flex flex-row bg-purple-300 text-black justify-evenly items-center w-full py-4 mb-16">
        <a className="hover:text-gray-800 active:text-gray-900 transition font-semibold text-xl" href="/">Pachura Motorsport</a>
        <div className="flex flex-row justify-evenly items-center gap-4">
          <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md shadow-md text-white px-4 py-1" href="/zlecenie/nowe">+ Stwórz nowe zlecenie</a>
          <a className="underline text-blue-500 hover:text-blue-600 active:text-blue-400 transition" href="/zlecenia/">Przeglądaj zlecenia</a>
          <a className="underline text-blue-500 hover:text-blue-600 active:text-blue-400 transition" href="/czesci/zamow">Zamów części</a>
          <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md shadow-md text-white font-xl font-bold px-8 py-1" href="/login">Zaloguj</a>
          <a className="bg-purple-200 hover:bg-purple-300 active:bg-purple-100 transition rounded-md shadow-md text-black px-4 py-1" href="/register">Zarejestruj</a>
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex flex-row bg-purple-300 text-black justify-evenly items-center w-full py-4 mb-16">
      <a className="hover:text-gray-800 active:text-gray-900 transition font-semibold text-xl" href="/">Pachura Motorsport</a>
      <div className="flex flex-row justify-evenly items-center gap-4">
        <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md shadow-md text-white px-4 py-1" href="/zlecenie/nowe">+ Stwórz nowe zlecenie</a>
        <a className="underline text-blue-500 hover:text-blue-600 active:text-blue-400 transition" href="/zlecenia/">Przeglądaj zlecenia</a>
        <a className="underline text-blue-500 hover:text-blue-600 active:text-blue-400 transition" href="/czesci/zamow">Zamów części</a>
        <div className="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" fill="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          {session.user.name}
        </div>
        <Logout />
      </div>
    </nav>
  )
}
