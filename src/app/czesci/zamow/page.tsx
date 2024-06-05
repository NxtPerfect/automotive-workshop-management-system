import { addPart, getParts } from '@/app/utils'
import React from 'react'
import Form from './Form'

export default async function Page() {
  const parts = await getParts()
  async function addParts(partId: number, quantity: number) {
    "use server";
    await addPart(partId, quantity);
    return 0;
  }
  return (
    <div className='flex flex-row gap-10'>
      <div>
        Części w magazynie:
        <table className="flex flex-col gap-2 w-fit">
          <tbody>
            <tr className="border-black border-2 p-2">
              <th className="border-black border-2 px-4 bg-purple-200 text-black">Nazwa części</th>
              <th className="border-black border-2 px-4 bg-purple-200 text-black">Ilość w magazynie</th>
            </tr>
            {parts.map((part) => {
              return (
                <tr key={part.id} className="border-black border-2 p-2 bg-purple-500">
                  <td className="border-black border-2 p-1 text-white">{part.name}</td>
                  <td className="border-black border-2 p-1 text-white">{part.quantity}</td>
                </tr>

              )
            })}
          </tbody>
        </table>
      </div>

      <div>
        Zamów części
        <table className="flex flex-col gap-2 w-fit">
          <tbody>
            <tr className="border-black border-2 p-2 bg-purple-500">
              <th className="border-black border-2 px-4 bg-purple-200 text-black">Nazwa części</th>
              <th className="border-black border-2 px-4 bg-purple-200 text-black">Ilość do zamówienia</th>
            </tr>
            {parts.map((part) => {
              return (
                <tr key={part.id} className="border-black border-2 p-2">
                  <td className="border-black border-2 p-1 text-white">{part.name}</td>
                  <td className="border-black border-2 p-1 text-white"><Form key={part.id} partId={part.id as number} addParts={addParts}/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div >
  )
}
