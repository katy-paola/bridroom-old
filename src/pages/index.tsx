import { signIn, useSession } from 'next-auth/react';

export default function Home() {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return <p>Signed in as {session.user.email}</p>;
    }

    return (
        <main>
            <h1>No estas autenticado</h1>

            <button onClick={() => signIn('google')} className="btn-login">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-google"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
                Iniciar sesión con Google
            </button>
        </main>
    );
}
