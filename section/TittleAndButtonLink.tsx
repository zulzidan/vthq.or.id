import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TittleAndButtonLink: React.FC = () => {
     return (
      <section className="py-6 px-6 md:px-14">
        <div className="mx-auto max-w-screen-2xl">
          <div className="bg-gradient-to-tr from-green-500 to-green-800 p-8 rounded-xl">
            <div className="md:flex md:space-x-4 space-y-4 md:space-y-0">
              <div className="text-white font-bold md:text-2xl">
                SIHIMMA
                <br />
                SISTEM INFORMASI HIMMATUL QURAN MALINO
              </div>
              <div className="md:space-y-4 flex-grow">
              <Button variant="secondary" asChild className="hidden md:block w-full text-center rounded-full font-semibold">
              <Link href={"https://himmatulquranmalino.siata.org"}>
              himmatulquranmalino.siata.org
              </Link>
              </Button>
              <Button variant="secondary" asChild className="w-full rounded-full font-semibold">
              <Link href={"https://himmatulquranmalino.siata.org"}>
              Kunjungi
              </Link>
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
     )
}
export default TittleAndButtonLink;

// https://himmatulquranmalino.siata.org