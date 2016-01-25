import { run } from '@cycle/core'
import { makeDOMDriver } from '@cycle/dom'
import { makeHistoryDriver } from '@cycle/history'
import Rx from 'rx'
import Main from './main'

require("!style!css!styles/pure-min.css")
require("!style!css!styles/layout.css")
require("!style!css!styles/grids-responsive-min.css")

let mainApp = (sources) => {
  let sinks = Main(sources)
  return sinks
}

let sources = {
  DOM: makeDOMDriver(`#application`),
  History: makeHistoryDriver({ hash: false, queries: true }),
  Props: () => Rx.Observable.just(0)
}

run(mainApp, sources)
