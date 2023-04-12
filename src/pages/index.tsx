import { Card, Input, Button, Icon } from '@/components';
import { type IconName, iconsMap } from '@/components/Icon/constants';
import { supabase } from '@/lib/initSupabase';
import { type HousingModel } from '@/models/Housing.model';
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
            <main
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '1rem',
                }}>
                <h1>Bienvenido {session.user.name}</h1>

                <section
                    style={{
                        margin: '40px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}>
                    <Input name="email" label="Correo electrónico" />
                    <Input name="password" label="Contraseña" type="password" />

                    <Input
                        name="password"
                        label="Nombre completo"
                        error="Tu nombre no es muy feo."
                    />
                </section>

                <section
                    style={{
                        margin: '40px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                    }}>
                    <Button> Primary Button </Button>
                    <Button variant="secondary"> Secondary Button </Button>

                    <Button icon="star"> Primary Button </Button>
                    <Button variant="secondary" icon="facebook">
                        Secondary Button
                    </Button>
                </section>

                <section
                    style={{
                        margin: '40px 0',
                        display: 'flex',
                        gap: '1rem',
                    }}>
                    {Object.keys(iconsMap).map((iconName) => (
                        <Icon key={iconName} name={iconName as IconName} size="lg" />
                    ))}
                </section>

                <section>
                    <h2>Lista de viviendas</h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1rem',
                        }}>
                        {housings.map((housing, index) => (
                            <Card key={index} housing={housing} />
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
