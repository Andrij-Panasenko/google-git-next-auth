import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

export const authConfig: NextAuthOptions = {
   providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, //сюди треба передати строки з .env
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, //сюди треба передати строки з .env
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string, //сюди треба передати строки з .env
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, //сюди треба передати строки з .env
    }),
  ],
  secret: process.env.SECRET,
}