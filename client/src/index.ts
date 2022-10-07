import define from "./define"
import { Inspector, Library, Runtime } from "./runtime.js"

const runtime = new Runtime()
const main = runtime.module(define, Inspector.into(document.body))
