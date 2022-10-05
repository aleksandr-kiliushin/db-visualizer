async function bootstrap() {
  if (process.env.PORT === undefined) {
    throw new Error("process.env.PORT is undefined.")
  }

  console.log("started")
}

bootstrap()
