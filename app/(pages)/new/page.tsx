import dynamic from 'next/dynamic';
import { Suspense } from "react";

const DynamicNewInvoiceForm = dynamic(() => import('@/app/(pages)/new/__component/NewInvoiceForm'), { ssr: false });

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicNewInvoiceForm />
    </Suspense>
  </div>
);

export default Page;