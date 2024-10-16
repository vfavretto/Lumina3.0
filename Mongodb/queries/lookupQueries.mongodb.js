use("lumina");
db.empresas.aggregate([
  {
    $lookup: {
      from: "servicos",
      localField: "servicos",
      foreignField: "servicos.idServ",
      as: "servicosDetalhados",
    },
  },
  {
    $project: {
      nomeEmpresa: 1,
      tipoEmpresa: 1,
      "servicosDetalhados.servicos.idServ": 1,
      "servicosDetalhados.servicos.nomeServ": 1,
      "servicosDetalhados.servicos.descricaoServ": 1,
      _id: 0,
    },
  },
]);


use("lumina")
db.empresas.aggregate([
  {
    $lookup: {
      from: "admin",
      localField: "idEmpresa",
      foreignField: "idAdm",
      as: "admDetalhes"
    },
  },
  {
    $project: {
      nomeEmpresa: 1,
      telefoneEmpresa: 1,
      emailEmpresa: 1,
      "admDetalhes.user": 1,
      _id: 0
    },
  },
]);
