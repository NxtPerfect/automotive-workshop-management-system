"use client";
import { ChangeEvent, useCallback, useState } from "react";
import { callProducts } from "../db";
import Image from "next/image";

//       {zlecenia.forEach(zlecenie => {
//   <div>
//     <img src={zlecenie.image}>
//     </img>
//     <div>
//       <div>
//         <h1>{zlecenie.make} {zlecenie.model}</h1><p>{zlecenie.year} {zlecenie.engine}</p>
//       </div>
//       <p>Nr. VIN: {zlecenie.vin}</p>
//       <div>Właściciel: <p>{zlecenie.owner_name} {zlecenie.owner_surname}</p> <p>{zlecenie.owner_phone_number}</p></div>
//       <p>Status: {zlecenie.status}</p>
//       <p>Pracownik: {zlecenie.worker}</p>
//       <button onClick={changeWorker}>Zmień pracownika</button> {
//         // Opens modal to change worker from list of all
//       }
//     </div>
//     <a href='zlecenia/${zlecenie.id}'>Zobacz szczegóły</a>
//   </div>
// })}


export default function page() {
  function changeWorker(e: ChangeEvent<HTMLSelectElement>, id: number) {
    // send request to api to change job with id to worker of
    console.log("New worker for job", id, "is", e.target.value)
    return 0;
  }

  return (
    <main className="flex flex-col justify-items-center items-center h-full w-full">
      <h1 className="text-5xl font-semibold tracking-wider mb-4">Zlecenia</h1>
      <div className="flex flex-row bg-purple-300 p-4 rounded-md w-[75svw] mb-4">
        <div className="flex flex-row h-full">
          <Image className="rounded-md h-full" src="/images/camry.jpg" height={500} width={400} layout={'raw'} alt="Picture of toyota camry 1986" />
        </div>
        <div className="flex flex-col ml-4 text-black flex-1 justify-evenly">
          <div className="flex flex-row">
            <h2 className="text-2xl font-bold content-center mr-1">Toyota Camry</h2><p className="flex mr-4 self-center">1986</p><p className="flex self-center">1.6l</p>
          </div>
          <div className="flex flex-row gap-4"><p className="content-center">Nr. VIN:</p><p>1G1JC5SG7D4245775</p></div>
          <div className="flex flex-row content-center gap-4">Właściciel: <p className="content-center mr-2">Elon Musk</p>
            <p className="flex flex-row content-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              637 127 3033</p></div>
          <div className="flex flex-row content-center mb-10 gap-4">Status:
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-green-800">Zakończone</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <p className="flex flex-row self-center content-center">Pracownik: </p>
            <select className="bg-purple-600 rounded-md shadow-md text-white px-4 py-1 w-fit" name="worker" onChange={(e) => changeWorker(e, 1)}>
              <option value="adam_nowak">Adam Nowak</option>
              <option value="grazyna_nowak">Grażyna Nowak</option>
              <option value="tomasz_problem">Tomasz Problem</option>
            </select>
            <a className="flex bg-purple-600 w-fit rounded-md shadow-md text-white px-6 py-1" href='zlecenia/1'>Zobacz szczegóły</a></div>
        </div>
      </div>
      <a className="flex w-fit bg-purple-800 font-bold text-2xl rounded-md shadow-md text-white px-4 py-1" href='zlecenia/nowe'>+ Stwórz nowe zlecenie</a>
    </main >
  )
}
