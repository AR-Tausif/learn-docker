const app = require("./index.js");
const mongoose= require("mongoose");
const port = 5000;
async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/try-docker");
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