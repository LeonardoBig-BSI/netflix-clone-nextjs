import { ChevronRight } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Profile } from "./components/Profile";
import { Intro } from "./components/Intro";

export default function Home() {
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
                  <Button.Content className="px-4 py-[6px] rounded-md bg-colorButton hover:bg-colorButtonHover duration-300">
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

      {/* <main className="container">
        <Profile.Root>
          <Profile.Content text="Quem está assistindo?">
            <Profile.Image />
          </Profile.Content>

          <Button.Root>
            <Button.Content
              className="my-10 md:mt-20 px-10 py-2 bg-zinc-900 border border-zinc-500 text-zinc-500 hover:border-white hover:text-white"
              
            >
              <Button.Text text="Gerenciar Perfis" />
            </Button.Content>
          </Button.Root>

        </Profile.Root>
      </main> */}
    </main>
  );
}
