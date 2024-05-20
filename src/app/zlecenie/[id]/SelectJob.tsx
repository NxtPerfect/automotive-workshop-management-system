"use client";
import React from 'react'

export default function SelectJob({jobs, serviceId, addJob}) {
  return (
    <>
      <span className="text-lg font-semibold mt-4">Dodaj nowe naprawy</span>
        <select className="w-fit mt-1 p-2 rounded-md shadow-md" onChange={(e) => addJob(Number.parseInt(e.target.selectedOptions[0].value), serviceId)}>
          <option value="Wybierz opcje" selected disabled></option>
          {jobs.map((job) => {
            return (
              <option key={job.id} value={job.id}>{`${job.name} (${job.price.toFixed(2)}pln)`}</option>
            )
          })}
        </select>
    </>
  )
}
