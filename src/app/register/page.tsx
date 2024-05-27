"use client"
import React from 'react'
import bcrypt from "bcryptjs";
import { createUser } from '../utils';

export default function Register() {
  return (
    <form action={async (formData: FormData) => {
      // e.preventDefault();
      if (formData.get("password") != formData.get("confirm_password")) return "Passwords don't match";
      console.log(formData.get("password"), formData.get("confirm_password"))
      const salt = await bcrypt.genSalt(8)
      const password = await bcrypt.hash(formData.get("password"), salt)
      const confirm_password = await bcrypt.hash(formData.get("confirm_password"), salt)
      console.log(password, confirm_password)
      const user = {
        name: formData.get("name") + " " + formData.get("surname") as string,
        email: formData.get("email") as string,
        password: password as string,
        confirm_password: confirm_password as string,
      }
      await createUser(user.name, user.email, user.password, user.confirm_password)
    }}>
      <label htmlFor="name">Imie</label>
      <input className="text-black" type="text" name="name" minLength={3} maxLength={64}></input>
      <label htmlFor="surname">Nazwisko</label>
      <input className="text-black" type="text" name="surname" minLength={3} maxLength={64}></input>
      <label htmlFor="email">Email</label>
      <input className="text-black" type="email" name="email" minLength={7} maxLength={64}></input>
      <label htmlFor="password">Hasło</label>
      <input className="text-black" type="password" name="password" minLength={6} maxLength={64}></input>
      <label htmlFor="confirm_password">Powtórz hasło</label>
      <input className="text-black" type="password" name="confirm_password" minLength={6} maxLength={64}></input>
      <button type="submit">Zarejestruj</button>
    </form>
  )
}
