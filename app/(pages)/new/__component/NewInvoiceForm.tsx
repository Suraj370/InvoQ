"use client";
import { UserInputForm } from "@/app/component/form/userInputForm";
import { FormSteps } from "@/app/component/form/step/fromSteps";
import { UserDataPreview } from "@/app/(pages)/new/__component/userDataPreview";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect } from "react";
import Link from "next/link";

const NewInvoiceForm = () => {
  const methods = useForm();

  useEffect(() => {
    try {
      const step = localStorage.getItem("step");
      if (!(step && typeof +step === "number"))
        localStorage.setItem("step", "1");
    } catch (e) {
      localStorage.setItem("step", "1");
    }
  }, []);

  return (
    <FormProvider {...methods}>
      <div className="max-w-lg min-h-screen w-full h-full p-4 md:p-12 border-r border-dashed flex flex-col justify-between">
        <div>
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <span className="text-green-700 font-bold text-lg">InvoQ</span>
          </Link>
          <UserInputForm />
        </div>
        <FormSteps />
      </div>
      <div className="relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <UserDataPreview />
      </div>
    </FormProvider>
  );
};

export default NewInvoiceForm;