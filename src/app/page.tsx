import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full gap-6 text-center">
      <h1>InvoQ</h1>
      <p>
        <Button asChild>
          <Link href={"/dashboard"}>Go To Dashboard</Link>
        </Button>
      </p>
    </main>
  );
}
