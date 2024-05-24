import { addJobs, getJobs, getJobsForService, getService, setFinished } from '@/app/utils'
import Image from 'next/image'
import React from 'react'
import Status from './Status'
import SelectJob from './SelectJob'

export default async function Page({ params }: {params: {id: number}}) {
  const service = await getService(Number.parseInt(params.id))
  const jobs = await getJobsForService(Number.parseInt(params.id))
  const allJobs = await getJobs()
  async function updateServiceStatus(serviceId: number) {
    'use server'
    console.log("Updating service" , serviceId, "to finished");
    await setFinished(Number.parseInt(serviceId));
    return 0;
  }

  async function addJob(jobId: number, serviceId: number) {
    'use server'
    console.log("Adding new job", jobId, "to", serviceId)
    await addJobs(jobId, serviceId)
    return 0;
  }

  return (
    <>
      <div className="flex flex-row bg-purple-300 p-4 rounded-md w-[75svw] h-full mb-4" key={service.id}>
        <div className="flex relative overflow-hidden flex-row h-full">
          <Image className="rounded-md bg-black h-full object-contain" src={"/images/" + service.model.toLowerCase() + service.year + ".jpg"} height={600} width={400} alt={"Picture of " + service.make + " " + service.model + " " + service.year} />
        </div>
        <div className="flex flex-col ml-4 text-black flex-1 justify-evenly">
          <div className="flex flex-row">
            <h2 className="text-2xl font-bold content-center mr-1">{service.make + " " + service.model}</h2><span className="flex mr-4 self-end">{service.year}</span><p className="flex self-end">{service.engine}l</p>
          </div>
          <div className="flex flex-row max-w-[15svw]"><span className="basis-1/2 flex-shrink-0 content-center">Nr. VIN:</span><p className="basis-1/2">{service.vin}</p></div>
          <div className="flex flex-row flex-nowrap content-center max-w-[15svw]"><span className="basis-1/2">Właściciel:</span><div className="flex flex-col flex-grow basis-1/2"><span className="content-center mr-2 whitespace-nowrap">{service.owner_name + " " + service.owner_surname}</span>
            <span className="flex flex-row content-center whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {service.owner_phone_number}</span></div>
          </div>
          <div className="flex flex-row content-center mb-10 max-w-[15svw] mt-1"><span className="basis-1/2">Status:</span>
            <div className="flex flex-col basis-1/2">
              {service.status ?
                (
                  <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="text-green-800">Zakończone</span>
                  </div>
                ) :
                (
                  <>
                    <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                      <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                      <path fillRule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <span className="text-blue-800">W trakcie</span>
                    </div>
                    <Status status={service.status} serviceId={Number.parseInt(params.id)} setFinished={updateServiceStatus}/>
                  </>
                )
              }
            </div>
          </div>
          <div className="flex flex-row gap-4 mb-8">
            <span className="flex flex-row self-center content-center">Pracownik: </span>
            <p className="content-center">{service.workerName}</p>
          </div>
          <table className="flex flex-col gap-2 w-fit">
            <tbody>
            <tr className="border-black border-2 p-2">
              <th className="border-black border-2 px-4 bg-purple-200">Nr.</th>
              <th className="border-black border-2 px-4 bg-purple-200">Wykonana usługa</th>
              <th className="border-black border-2 px-4 bg-purple-200">Cena (pln)</th>
            </tr>
            {jobs.map((j, id)=> {
                return(
                  <tr key={id} className="border-black border-2 p-2 bg-purple-500">
                    <td className="p-1 text-white">{id+1}</td>
                    <td className="border-black border-2 p-1 text-white">{j.jobs.name}</td>
                    <td className="p-1 text-white">{j.jobs.price.toFixed(2)}</td>
                  </tr>
                )
            })}
            </tbody>
          </table>
          {!service.status ? (
          <SelectJob jobs={allJobs} serviceId={Number.parseInt(params.id)} addJob={addJob}/>
          ) : ""}
        </div>
      </div>
    </>
  )
}
