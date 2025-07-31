import { Button } from "./components/Button";
import { MainProfile } from "./components/MainProfile";

export default function Home() {
  return (
    <div>
      <main className="container">
        <MainProfile.Root>
          <MainProfile.Content text="Quem está assistindo?">
            <MainProfile.Image />
          </MainProfile.Content>

          <Button.Root>
            <Button.Content
              className="my-10 md:mt-20 px-10 py-2 bg-zinc-900 border border-zinc-500 text-zinc-500 hover:border-white hover:text-white"
              
            >
              <Button.Text text="Gerenciar Perfis" />
            </Button.Content>
          </Button.Root>

        </MainProfile.Root>
      </main>
    </div>
  );
}
