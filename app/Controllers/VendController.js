import { Button } from "bootstrap";
import { ProxyState } from "../AppState.js";
import Snacks from "../Models/Snacks.js";
import { vendService } from "../Services/VendService.js";


function _draw() {
  let snack = ProxyState.snack
  document.getElementById('totalWallet').innerText = ProxyState.total.toString()
  document.getElementById('snackName').innerText = ProxyState.snacks
  document.getElementById('snackPrice').innerHTML = `<h3>${snack.price}</h3><hr/><img src="${snack.imgUrl}" alt="">`
}


function drawSnacks() {
  let template = ''
  ProxyState.snack.forEach(snack => {
    template += /*HTML*/ `
    <button class = "btn btn-success" onclick = "app.VendController.getSnacks('${snack.name}')">${snack.name} - ${snack.price}</button>
    `
  })
  document.getElementById('snack').innerHTML = template
}



export default class VendController {
  constructor() {
    _draw()
    drawSnacks()
  }

  buy() {
    vendService.buy()
    _draw()
  }
  return() {
    vendService.return()
    _draw()
  }

  insertCoin() {
    vendService.insertCoin()
    _draw()
  }

  getSnacks(snack) {
    vendService.getSnacks()
    _draw()
  }
}