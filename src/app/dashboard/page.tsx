import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
export default function Dashboard() {
  return (
    <main>
      <div className=" flex flex-col  justify-center h-full  max-w-5xl mx-auto gap-6">
        <div className="flex justify-between">
          <h1 className=" text-5xl font-semibold ">Invoices</h1>
          <p>
            <Button className="inline-flex gap-2" variant="ghost" asChild>
              <Link href={'/invoices/new'}>
                <CirclePlus className="h-4 w-4" />
                Create Invoice
              </Link>
            </Button>
          </p>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] p-4">Date</TableHead>
              <TableHead className="p-4">Email</TableHead>
              <TableHead className="p-4">Customer</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <span className="font-bold">10/31/2024</span>
              </TableCell>
              <TableCell className="text-left">
                <span className="font-bold">Zachary Quimby</span>
              </TableCell>
              <TableCell className="text-left">
                <span>quimby@janeexpress.com</span>
              </TableCell>
              <TableCell className="text-center">
                <Badge className=" rounded-full ">Open</Badge>
              </TableCell>
              <TableCell className="text-right">
                <span>$250.00</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
