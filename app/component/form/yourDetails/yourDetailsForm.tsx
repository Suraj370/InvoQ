import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Customer Details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. pranav@prolab.sh"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the your.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Your Name"
      placeholder="Suraj"
      variableName="yourName"
    />
    <ImageInput label="Logo" variableName="yourLogo" />
    <CustomTextInput
      label="Address"
      placeholder="Vasant Kunj"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="New Delhi"
      variableName="yourCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Delhi"
      variableName="yourState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="110070"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="India"
      variableName="yourCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="GSTIN 1234"
      variableName="yourTaxId"
    />
  </div>
);
