import React from "react";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export default function Dashboard() {
  return (
    <main>
      <div className=" flex flex-col  justify-center h-full  max-w-5xl mx-auto gap-6">
        <div className="flex justify-between">
          <h1 className=" text-5xl font-semibold "> Generate Invoice</h1>
          <p></p>
        </div>
        <form    className="grid gap-4 max-w-xs">
          <div>
            <Label htmlFor="name" className="block font-semibold text-sm mb-2">
              Billing Name
            </Label>
            <Input id="name" name="name" type="text" />
          </div>
          <div>
            <Label htmlFor="email" className="block font-semibold text-sm mb-2">
              Billing Email
            </Label>
            <Input id="email" name="email" type="email" />
          </div>
          <div>
            <Label htmlFor="value" className="block font-semibold text-sm mb-2">
              Value
            </Label>
            <Input id="value" name="value" type="text" />
          </div>
          <div>
            <Label
              htmlFor="description"
              className="block font-semibold text-sm mb-2"
            >
              Description
            </Label>
            <Textarea id="description" name="description" />
          </div>
          <div>
            <Button className="w-full font-semibold ">
                Submit
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
