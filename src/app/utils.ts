import { cache } from "react";
// import prisma from "../../lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getServices = cache(async () => {
  const services = await prisma.services.findMany()
  return services
})

export const getService = cache(async (id: number) => {
  const service = await prisma.services.findUnique({
    where: {
      id: id,
    },
  })
  return service
})

export const addService = cache(async (form: FormData) => {
  const newJob = await prisma.services.create({
    data: {
      make: form.make,
      model: form.model,
      year: Number.parseInt(form.year),
      engine: form.engine,
      vin: form.vin,
      color: form.color,
      plate: form.plate,
      owner_name: form.name,
      owner_surname: form.surname,
      owner_phone_number: form.phone,
      workers: {
        connect: {
          id: 1,
        },
      },
    },
  })
})

export const getWorkers = cache(async () => {
  const workers = await prisma.workers.findMany()
  return workers
})

export const getWorker = cache(async (id: number) => {
  const worker = await prisma.workers.findUnique({
    where: {
      id: id,
    },
  })
  return worker
})

export const updateWorker = cache(async (serviceId: number, workerId: number) => {
  const workerName = await prisma.workers.findUnique({
    select: {
      name: true,
    },
    where: {
      id: workerId
    }
  })
  console.log(`Worker name: ${workerName} service id: ${serviceId}`)
  const worker = await prisma.services.update({
    where: {
      id: serviceId,
    },
    data: {
      workerName: workerName.name,
    },
  })
})

export const getJobsForService = cache(async (serviceId: number) => {
  const jobs = await prisma.jobs_to_services.findMany({
    where: {
      serviceId: serviceId
    },
    select: {
      jobs: {
        select: {
          name: true,
          price: true,
          time: true,
        },
      },
    },
  })
  return jobs
})

export const getJobs = cache(async () => {
  const jobs = await prisma.jobs.findMany()
  return jobs
})

export const addJobs = cache(async (jobId: number, serviceId: number) => {
  const res = await prisma.jobs_to_services.create({
    data: {
      service: {
        connect: {
          id: serviceId,
        },
      },
      jobs: {
        connect: {
          id: jobId,
        },
      },
    },
  })
  return res;
})

export const setFinished = cache(async (serviceId: number) => {
  const res = await prisma.services.update({
    where: {
      id: serviceId
    },
    data: {
      status: true,
    },
  })
  return res;
})

export const getUser = cache(async (email: string) => {
  try {
    const res = await prisma.users.findUnique({
      where: {
        email: email
      }
    })
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
})

export const createUser = cache(async (name: string, email: string, password: string, confirm_password: string) => {
  if (password != confirm_password) return false;
  try {
    const res = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    })
    return res;
  } catch (error) {
    console.error("Got an error", error);
    return null;
  }
})
