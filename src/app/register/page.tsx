import React from 'react'

export default function Register() {
  return (
    <form>
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
