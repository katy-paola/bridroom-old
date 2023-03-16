import { supabase } from '@/lib/initSupabase';
import { HousingModel } from '@/models/Housing.model';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function Home() {
    const { data: session, status } = useSession();
    const [housings, setHousings] = useState<HousingModel[]>([]);

    useEffect(() => {
        supabase
            .from('housing')
            .select('*')
            .then(({ data, error }) => {
                if (error) {
                    console.error(error);
                } else {
                    setHousings(data);
                }
            });
    }, []);

    if (status === 'authenticated') {
        return (
            <main>
                <h1>Estas autenticado</h1>
                <pre>{JSON.stringify(session, null, 2)}</pre>

                <section>
                    <h2>Lista de viviendas</h2>
                    <div>
                        {housings.map((housing) => (
                            <article key={housing.id}>
                                <h3>{housing.name}</h3>
                                <p>{housing.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main>
            <h1>No estas autenticado</h1>

            <button onClick={() => signIn('google')} className="btn-login">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                </svg>
                Iniciar sesión con Google
            </button>
        </main>
    );
}
