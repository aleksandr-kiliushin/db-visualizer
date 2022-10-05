require("dotenv").config({ path: "./local.env" })

const bootstrap = async () => {
  console.log("process.env.PORT >>", process.env.PORT)
}

bootstrap()
