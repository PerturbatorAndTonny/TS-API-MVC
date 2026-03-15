import app from "./src/app.ts";

const port:Number = Number(process.env.PORT)

async function main() {
  try {
    app.listen(port);
    console.log("Server is running on port:", port);
  } catch (error) {
    console.log(error);
  }
}

main();