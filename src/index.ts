
import server from "./presentation/server"
import { db } from "./boot/db"
import { Admin } from "./infrastructure/models/adminSchema"

export const insertAdmin= async ()=>{

    const sampleAdmin = {
        userName: "nourAlSafwa",
        email: "admin12@gmail.com",
        password: "admin@12",
      };
}

(async () => {
    try {
      console.log("Initializing server and database connection...");
      server;
      await db()
        .then(() => console.log("data base connected in index page finish  "))
        .catch((error: any) => {
          console.error("error while connecting mongodb", error);
          process.exit(0);
        });
    } catch (error: any) {
      console.log("Error on start up: ", error);
    } finally {
      process.on("sigint", async () => {
        console.log("server is shutting down ");
        process.exit();
      });
    }
  })();
