const Sequelize = require("sequelize");
const database = require("../db");

const veiculos = database.define("Veiculos", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  Marca: {
    type: Sequelize.STRING,
    validate: {
      isString(value) {
        if (typeof value !== "string") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido texto"
          );
        }
      },
    },
  },

  Modelo: {
    type: Sequelize.STRING,
    validate: {
      isString(value) {
        if (typeof value !== "string") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido texto"
          );
        }
      },
    },
  },
  Versao: {
    type: Sequelize.STRING,
    validate: {
      isString(value) {
        if (typeof value !== "string") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido texto"
          );
        }
      },
    },
  },
  Ano: {
    type: Sequelize.INTEGER,
    validate: {
      isNumber(value) {
        if (typeof value !== "number") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido valores inteiros"
          );
        }
      },
    },
  },
  Combustivel: {
    type: Sequelize.STRING,
    validate: {
      isString(value) {
        if (typeof value !== "string") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido texto"
          );
        }
      },
    },
  },
  Cor: {
    type: Sequelize.STRING,
    validate: {
      isString(value) {
        if (typeof value !== "string") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido texto"
          );
        }
      },
    },
  },

  Quilometragem: {
    type: Sequelize.DOUBLE,
    validate: {
      isFloat(value) {
        if (typeof value !== "number") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido números"
          );
        }
      },
    },
  },
  Valor: {
    type: Sequelize.DOUBLE,
    validate: {
      isFloat(value) {
        if (typeof value !== "number") {
          throw new Error(
            "Digite um valor válido. Neste campo só é permitido números"
          );
        }
      },
    },
  },
});

module.exports = veiculos;
