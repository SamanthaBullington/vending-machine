import Value from "./Models/Value.js"
import Snacks from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  total = 0
  snack = [new Snacks('Doritos', 1.75, 'https://thiscatdoesnotexist.com'), new Snacks('Chocolate', 2.00, 'https://thiscatdoesnotexist.com')]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
