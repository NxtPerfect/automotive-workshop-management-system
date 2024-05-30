import React from 'react'
import bcrypt from "bcryptjs";
import Form from './Form';
import { createUser } from '../utils';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Register() {
  async function addUser(name: string, email: string, password: string, confirm_password: string) {
    "use server"
    await createUser(name, email, password, confirm_password);
    return 0;
  }
  const session = await getServerSession();
  if (session) {
    redirect('/')
  }
  return (
    <Form addUser={addUser} />
  )
}
