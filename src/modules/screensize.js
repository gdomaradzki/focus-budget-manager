'use strict';
// Eu provavelmente não precisaria dessa classe, mas porventura vou utilizar
// Lembrar de complementar a classe no futuro, ou descontinuar a mesma.
class Screensize {
  constructor(width) {
    this.width = width;
  }

  widthChecker() {
    this.width = window.innerWidth;
  }
}

module.exports = Screensize;
