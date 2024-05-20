"use client"
import React from 'react'

export default function Select({ workers, service, changeWorker }) {

  if (service.status) {
    return (
      <select className="bg-gray-400 text-gray-500 rounded-md shadow-md text-white px-4 py-1 w-fit" name="worker" disabled>
         <option key={0} selected>{service.workerName}</option>
      </select>
    )
  }

  return (
    <select className="bg-purple-600 rounded-md shadow-md text-white px-4 py-1 w-fit" name="worker" onChange={(e) => changeWorker(service.id, Number.parseInt(e.target.selectedOptions[0].value))}>
    {workers.map((worker: Worker) => {
        if (worker.name === service.workerName) {
          return (
           <option key={worker.id} value={worker.id} workerid={worker.id} selected>{worker.name}</option>
          )
        }
        return (
         <option key={worker.id} value={worker.id} workerid={worker.id}>{worker.name}</option>
        )
    })}
   </select>
  )
}
