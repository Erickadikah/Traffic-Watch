import { generateSecret } from "@/app/generateSecret";

const secret = generateSecret();

export default {
    providers: [
        
    ],
    secret: secret,
};