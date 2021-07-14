import { ProxyState } from '../AppState.js'

class VendService {
  buy() {
    ProxyState.total -= ProxyState.snack.price
    console.log('yes')
  }

  return() {
    ProxyState.total = 0
    console.log('return')
  }
  insertCoin() {
    ProxyState.total += .25
    console.log('+.25')
  }

  getSnacks(snack) {
    let foundSnack = ProxyState.snack.find(u => u.name == snack)
    if (ProxyState.snack >= foundSnack.price) {
      ProxyState.snack -= foundSnack.price
      foundSnack.inventory--
      ProxyState.getSnacks.push(foundSnack)
      ProxyState.getSnacks = ProxyState.getSnacks

    }
  }
}

export const vendService = new VendService()