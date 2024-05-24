export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-8xl font-semibold tracking-wide mb-32">Co chcesz zrobić?</h1>
      <div className="flex w-[40svw] flex-row gap-8 items-center justify-between">
        <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md px-4 py-2" href="/zlecenie/nowe">+ Stwórz nowe zlecenie</a>
        <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md px-4 py-2" href="/zlecenia">Przeglądaj zlecenia</a>
        <a className="bg-purple-500 hover:bg-purple-600 active:bg-purple-400 transition rounded-md px-4 py-2" href="/czesci/zamow">Zamów części</a>
      </div>
    </main>
  );
}
