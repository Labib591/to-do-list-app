const { default: Credentials } = require("next-auth/providers/credentials");
const { default: dbConnect } = require("../../../../../lib/mongoose");
const { default: User } = require("../../../../../model/User");
const { default: NextAuth } = require("next-auth");


const authOptions = {
    providers: [
        Credentials({
            name:"Credentials",
            credentials: {
                email: {label: "email", type: "email"},
                password: {label: "password", type: "password"}
            },

            async authorize(credentials){
                await dbConnect();

                const user = await User.findOne({email: credentials.email});

                if(!user){
                    throw new Error("User not found");
                }

                const isPasswordCorrect = credentials.password === user.password;

                if(!isPasswordCorrect){
                    throw new Error("Incorrect password");
                }

                return { id: user._id, name: user.name, email: user.email };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages : {
        login : "/auth/login",
    },
    
    secret: process.env.SECRET,

    callbacks: {
    async jwt({ token, user }) {
      // When user signs in
      if (user) {
        token.id = user._id;   // save Mongo _id in token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.id; // expose it in session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };