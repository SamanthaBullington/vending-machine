export default class Snacks {
  constructor(name, price, imgUrl) {
    this.name = name
    this.price = price
    this.imgUrl = imgUrl || 'https://thiscatdoesnotexist.com'
  }
}