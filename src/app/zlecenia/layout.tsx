import { getServices } from "../utils";
import Services from "./page";

// Revalidate at most every 5 minutes
export const revalidate = 300;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const services = await getServices();
  return (
    <main className="flex flex-col justify-items-center items-center h-full w-full">
      <Services />
    </main>
  )
}
