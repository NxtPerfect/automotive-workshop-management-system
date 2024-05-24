import React from 'react'
import Form from './Form'
import { addService } from '@/app/utils'

export default function Page() {
  async function addNewService(e: FormData) {
    'use server'
    console.log("Adding new service", e)
    await addService(e)
    return 0;
  }
  return (
    <Form addService={addNewService}/>
  )
}
