import React from 'react'
import bcrypt from "bcryptjs";
import Form from './Form';
import { createUser } from '../utils';

export default function Register() {
  async function addUser(name: string, email: string, password: string, confirm_password: string) {
    "use server"
    await createUser(name, email, password, confirm_password);
    return 0;
  }
  return (
    <Form addUser={addUser} />
  )
}
