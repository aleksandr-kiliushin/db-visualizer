// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Inspector, Runtime } from "@observablehq/runtime"

import { define } from "./define"

const runtime = new Runtime()
runtime.module(define, Inspector.into(document.body))
