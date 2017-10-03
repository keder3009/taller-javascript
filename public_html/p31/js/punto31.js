//class type {
//  principal() {
//    for (i = 0; i < 10; i++) {
//      return Number(prompt("type your numbers"));
//    }
//  }
//}
//class capturar {
//
//  constructor() {
//    this.numbers = [];
//  }
//}
//class numbers {
//  setnumbers(numero) {
//    this.number2 = numero;
//  }
//}
//
//class db {
//  constructor(database) {
//    this._database = database;
//  }
//
//  setDataBase(database) {
//    this._database = database;
//  }
//
//  getDataBase() {
//    return this._database;
//  }
//
//  getLocalStorage() {
//    let pairnumbers = JSON.parse(localStorage.getItem(this._database));
//    if (pairnumbers === null) {
//      pairnumbers = [];
//    }
//    return pairnumbers;
//  }
//}
//
//class app {
//
//  constructor(database) {
//    this._opc;
//    this._type = new type();
//    this._type.principal();
//    this._captura = new captura();
//    this._database = new db(database);
//  }
//
//  run() {
//    do {
//      this._opc = this._type.principal();
//      this._validateOpc();
//    } while (this._opc > 0);
//  }
//}
//
//
//
////let kevin = app()

class type {
  principal() {
    for (i = 0; 1 < 10; i++) {
      return Number(prompt("type your numbers"));
    }
  }
}
class app {
  constructor() {
    this._opc;
    this._type = new type.principal();
  }
}