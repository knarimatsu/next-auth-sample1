import { LoginButton, LogoutButton } from "../components/buttons";

export default function Home() {
    return (
        <main className="flex justify-center items-center h-70">
            <div>
                <LoginButton />
                <LogoutButton />
            </div>
        </main>
    );
}
