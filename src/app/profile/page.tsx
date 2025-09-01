import { Button } from "../_components/Button";
import { Profile } from "../_components/Profile";

export default function ProfilePage() {

    return (
        <section>
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
        </section>
    )
}