import Rx from 'rx'
import { div } from '@cycle/dom'

let view = () =>
  div(`.app`, [ `Hello Cycle` ])

let main = (sources) => {
  let view$ = Rx.Observable.just(
    view()
  )

  return {
    DOM: view$,
    history: sources.History,
    Props: sources.Props,
  }
}

export default main
