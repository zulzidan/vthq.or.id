import {useState} from "react";
import Image from "next/image";


import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";

import { DonationImage } from "@/data/dummyDonationImage";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

interface DonationImageCardProps {
  donationInfo: DonationImage;
}
const DonationImageCard: React.FC<DonationImageCardProps> = ({
  donationInfo,
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(donationInfo.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset state after 2 seconds
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-auto h-auto">
          {donationInfo.imageUrl && (
            <Image
              src={donationInfo.imageUrl}
              alt={donationInfo.alt}
              width={2363}
              height={2363}
              className="w-auto h-auto rounded-sm shadow-lg"
            />
          )}
        </div>
      </DialogTrigger>
      <DialogContent
        className={`${montserrat.variable} bg-gradient-to-tr from-green-500 to-green-800 mx-auto max-w-sm md:max-w-2xl border-none`}
      >
        <DialogHeader className="font-bold font-sans">
          <DialogTitle className="uppercase">{donationInfo.title}</DialogTitle>
          <DialogDescription>
            <div className="text-black font-semibold">
              <p>{donationInfo.typeBank}</p>
              <p>{donationInfo.nameOfAccount}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={donationInfo.accountNumber}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
            <span className="sr-only">Copy</span>
            {copied ? "Tersalin!" : <CopyIcon className="h-4 w-4" />}
          </Button>
        </div>
        <div className="w-auto h-auto">
          {donationInfo.imageUrl && (
            <Image
              src={donationInfo.imageUrl}
              alt={donationInfo.alt}
              width={2363}
              height={2363}
              className="w-auto h-auto rounded-sm shadow-lg"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationImageCard;
