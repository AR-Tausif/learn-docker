import app from "./index.js";
import mongoose from "mongoose";
const port = 5000;
async function main() {
  try {
    await mongoose.connect("mongodb://172.17.0.2:27017/try-docker");
    // await mongoose.connect("mongodb://https://humble-train-j67449q4wpwh5gp4-27017.app.github.dev/try-docker");
    // await mongoose.connect("mongodb+srv://AllJobBd_web_App:AllJobBd_web_App@cluster0.f7u6kbd.mongodb.net/try-docker?retryWrites=true&w=majority&appName=Cluster0");
    // await mongoose.connect(config.local_database_url as string);


    app.listen(port, () => {
      console.log(
        `server is running on Port  ${`http://localhost:${port}`}`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();