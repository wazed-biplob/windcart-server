import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  database_url: process.env.DB_URL,
  salt_rounds: process.env.SALT_ROUNDS,
};
