import React, { FC, useState } from "react";
import { Facebook, Twitter, Whatsapp, Clipboard } from "react-bootstrap-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ShareButtons: FC = () => {
  const [showAlert, setShowAlert] = useState(false); // State untuk mengontrol alert
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setShowAlert(true); // Tampilkan alert ketika tautan disalin

    // Sembunyikan alert setelah beberapa detik (contoh: 3 detik)
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
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
      // Hanya tampilkan tombol jika showAlert adalah false
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