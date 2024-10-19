import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" text-primary  bg-foreground mb-2 ">
      <div className=" flex items-center justify-between  max-w-4xl mx-auto px-2">
        <h1 className=" text-5xl ">InvoQ</h1>
        <p>
          <Button asChild>
            <Link href={"/dashboard"}>Sign in</Link>
          </Button>
        </p>
      </div>
    </header>
  );
}
