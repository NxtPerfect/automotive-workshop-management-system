"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Form({ addService }) {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      make: formData.get('make'),
      model: formData.get('model'),
      year: formData.get('year'),
      engine: formData.get('engine'),
      vin: formData.get('vin'),
      color: formData.get('color'),
      plate: formData.get('plate'),
      name: formData.get('name'),
      surname: formData.get('surname'),
      phone: formData.get('phone'),
    };
    console.log("Form data:", data);
    await addService(data);
    router.push('/zlecenia');
    router.refresh();
  }
  return (
    <form className="flex flex-col max-w-[40ch] p-8 bg-purple-500 rounded-md mt-4" onSubmit={(e) => handleSubmit(e)}>
      <label className="text-lg" htmlFor="make">Marka</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="make" placeholder="Toyota" required></input>
      <label className="text-lg mt-2" htmlFor="model">Model</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="model" placeholder="Avensis" required></input>
      <label className="text-lg mt-2" htmlFor="year">Rocznik</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="number" name="year" placeholder="2004" min={1800} max={2025} required></input>
      <label className="text-lg mt-2" htmlFor="engine">Pojemność Silnika</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="number" name="engine" placeholder="1.6" min={0.1} max={12.0} step={0.1} required></input>
      <label className="text-lg mt-2" htmlFor="vin">Nr. VIN</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="vin" placeholder="JTEGD20V550092056" minLength={10} maxLength={17} required></input>
      <label className="text-lg mt-2" htmlFor="color">Kolor</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="color" placeholder="czarny" minLength={3} maxLength={14} required></input>
      <label className="text-lg mt-2" htmlFor="plate">Nr. Rejestracji</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="plate" placeholder="XYZ1234" minLength={4} maxLength={7} required></input>
      <label className="text-lg mt-2" htmlFor="name">Imie Właściciela</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="name" placeholder="Jan" minLength={3} maxLength={32} required></input>
      <label className="text-lg mt-2" htmlFor="surname">Nazwisko Właściciela</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="text" name="surname" placeholder="Kowalski" minLength={3} maxLength={64} required></input>
      <label className="text-lg mt-2" htmlFor="phone">Numer Telefonu Właściciela</label>
      <input className="text-black text-lg px-2 py-1 rounded-md" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" minLength={9} maxLength={14} required></input>
      <button className="bg-purple-800 hover:bg-purple-700 active:bg-purple-900 transition shadow-md rounded-md p-2 px-4 text-xl mt-6">Dodaj</button>
    </form>
  )
}
