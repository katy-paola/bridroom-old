import NextAuth, { NextAuthOptions } from 'next-auth';
import { SupabaseAdapter } from '@next-auth/supabase-adapter';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
        }),
    ],
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
    }),
    secret: process.env.NEXTAUTH_SECRET || '',
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }

            return token;
        },
        session({ session, token }) {
            session.user.id = token.id;
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
};

export default NextAuth(authOptions);
