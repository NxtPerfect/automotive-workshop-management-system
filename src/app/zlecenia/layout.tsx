import { getServices, getWorkers } from "../utils";
import Services from "./page";

// Revalidate at most every 5 minutes
export const revalidate = 300;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = await getServices();
  const workers = await getWorkers();
  return (
    <main className="flex flex-col justify-items-center items-center h-full w-full">
      <Services />
    </main>
  )
}
