import { generateSecret } from "@/app/generateSecret";

const secret = generateSecret();

export default {
    providers: [
        
    ],
    secret: process.env.GOOGLE_CLIENT_SECRET || secret,
};