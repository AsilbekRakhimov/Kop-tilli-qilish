import dotenv from "dotenv";

dotenv.config();

const appConfig = {
  port: process.env.PORT || 3005,
  host: process.env.HOST || "localhost",
};  

export default appConfig;
