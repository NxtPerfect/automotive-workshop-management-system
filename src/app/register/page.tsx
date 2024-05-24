"use client"
import React from 'react'
import bcrypt from "bcryptjs";

export default function Register() {
  return (
    <form action={async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const password = bcrypt.hashSync(formData.get("password"), 8)
      const user = {
        name: formData.get("name") + formData.get("surname"),
        email: formData.get("email"),
        password: password
      }
      await createUser()
    }}>
      <label htmlFor="name">Imie</label>
      <input type="text" name="name" minLength={3} maxLength={64}></input>
      <label htmlFor="surname">Nazwisko</label>
      <input type="text" name="surname" minLength={3} maxLength={64}></input>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" minLength={7} maxLength={64}></input>
      <label htmlFor="password">Hasło</label>
      <input type="password" name="password" minLength={6} maxLength={64}></input>
      <label htmlFor="confirm_password">Powtórz hasło</label>
      <input type="password" name="confirm_password" minLength={6} maxLength={64}></input>
      <button type="submit">Zarejestruj</button>
    </form>
  )
}
