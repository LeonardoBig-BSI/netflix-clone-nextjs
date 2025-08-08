"use client"

import { ChevronRight } from "lucide-react";
import { Button } from "./_components/Button";
import { Header } from "./_components/Header";
import { Input } from "./_components/Input";
import { Profile } from "./_components/Profile";
import { Intro } from "./_components/Intro";
import { redirect } from "next/navigation";

export default function Home() {

  function handleLogin() {
    redirect('/login');
  }

  return (
    <main>
      <div className="relative w-full min-h-screen bg-[url('/netflix-banner.jpg')] bg-cover bg-center bg-no-repeat">
        
        {/* Escurece um pouco o banner (Overlay) */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Header */}
        <div className="relative z-10 w-full">
          <Header.Root>
            <Header.Content>
              <Header.Logo />

              <div className="flex items-center gap-4">
                <Header.Language />

                <Button.Root>
                  <Button.Content onClick={handleLogin} className="px-4 py-[6px] rounded-md bg-colorButton hover:bg-colorButtonHover duration-300">
                    <Button.Text text="Entrar" className="text-white font-bold" />
                  </Button.Content>
                </Button.Root>
              </div>

            </Header.Content>
          </Header.Root>

          <section className="px-4 mt-10 md:mt-28 flex flex-col justify-center items-center text-center">
            <Intro />
          </section>
        </div>
      </div>
    </main>
  );
}
