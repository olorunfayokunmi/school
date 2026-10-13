import dotenv from 'dotenv';

dotenv.config();
export const   config = {
    port: process.env.PORT,
    db_uri: process.env.DB_URI,
    access: process.env.ACCESS_SECRET,
      gmail: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
};