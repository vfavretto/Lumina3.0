
use("lumina");
db.empresas.find({}, { nomeEmpresa: 1, endereco: 1, _id: 0 });

use("lumina");
db.empresas.find().count();

use("lumina");
db.empresas.find(
  { nomeEmpresa: /empresa/i },
  { nomeEmpresa: 1, endereco: 1, _id: 0 }
);

use("lumina");
db.empresas.find(
  {
    "endereco.cidade": "São Paulo",
    servicos: "1",
  },
  { nomeEmpresa: 1, endereco: 1, _id: 0 }
);

use("lumina");
db.empresas.aggregate([
  {
    $project: {
      nomeEmpresa: 1,
      numeroServicos: { $size: "$servicos" },
      _id: 0,
    },
  },
  { $sort: { numeroServicos: -1 } },
]);

use("lumina");
db.empresas.find(
  {
    $or: [
      { siteEmpresa: { $exists: true } },
      { emailEmpresa: { $not: { $regex: ".com$" } } },
    ],
  },
  { nomeEmpresa: 1, emailEmpresa: 1, _id: 0 });

use("lumina");
db.empresas.find(
  {
    $and: [
      { servicos: { $exists: true, $not: { $size: 1 } } },
      { tipoEmpresa: { $ne: "Contratante" } },
    ],
  },
  { nomeEmpresa: 1, tipoEmpresa: 1, _id: 0 });

use("lumina");
db.empresas.find({
    $and: [
      { CNPJ: { $regex: "^[01]" } },
      { $or: [
        { "endereco.cidade": "São Paulo" },
        { "endereco.cidade": "Rio de Janeiro" }
      ]}
    ]
  },
  { nomeEmpresa: 1, endereco: 1, _id: 0 })
