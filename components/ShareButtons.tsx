import React, { FC, useState } from "react";
import { Facebook, Twitter, Whatsapp, Clipboard } from "react-bootstrap-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ShareButtons: FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <section>
    {showAlert ? (
      <Alert>
        <Clipboard />
        <AlertTitle>Tautan Berhasil Disalin</AlertTitle>
        <AlertDescription>
          Tautan artikel ini telah disalin ke clipboard.
        </AlertDescription>
      </Alert>
    ) : (
      <div className="flex space-x-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>

        <a
          href={`https://twitter.com/intent/tweet?text=Artikel+menarik:+${encodeURIComponent(
            currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            "Cek artikel ini: " + currentUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Whatsapp />
        </a>
        <button onClick={copyToClipboard}>
          <Clipboard />
        </button>
      </div>
    )}
  </section>
  );
};

export default ShareButtons;