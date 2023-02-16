import { Inspector, Runtime } from "@observablehq/runtime"

import { define } from "./define"
import "./select-list"

const render = () => {
  const runtime = new Runtime()
  runtime.module(define, Inspector.into(document.querySelector("#diagram")))
}

render()

const form = document.querySelector("#select-list")
form.addEventListener("change", () => {
  document.querySelector("#diagram").innerHTML = ""
  render()
})
