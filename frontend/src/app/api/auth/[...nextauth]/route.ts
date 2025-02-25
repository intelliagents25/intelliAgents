import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

// this is where we define the authentication providers for next-auth
const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          },
        })
      ],
      //https://stackoverflow.com/questions/69068495/how-to-get-the-provider-access-token-in-next-auth
      callbacks: { 
        async jwt({token, account}) {
          if (account) {
            token = Object.assign({}, token, { access_token: account.access_token });
          }
          return token
        },
        async session({session, token}) {
        if(session) {
          session = Object.assign({}, session, {access_token: token.access_token})
          }
        return session
        }
      }
})

export { handler as GET, handler as POST }
