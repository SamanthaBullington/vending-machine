import ValuesController from "./Controllers/ValuesController.js";
import VendController from "./Controllers/VendController.js";

class App {
  valuesController = new ValuesController();
  vendController = new VendController();
}

window["app"] = new App();
