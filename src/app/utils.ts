import { cache } from "react";
// import prisma from "../../lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getServices = cache(async () => {
  const services = await prisma.service.findMany()
  return services
})

export const getService = cache(async (id: number) => {
  const service = await prisma.service.findUnique({
    where: {
      id: id,
    },
  })
  return service
})
