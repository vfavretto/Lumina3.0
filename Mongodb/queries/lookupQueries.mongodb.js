use('lumina')
db.empresas.aggregate([
    {
      $lookup: {
        from: "servicos",
        localField: "servicos",
        foreignField: "idServ",
        as: "servicosDetalhados"
      }
    },
    {
      $project: {
        nomeEmpresa: 1,
        tipoEmpresa: 1,
        "servicosDetalhados.idServ": 1,
        _id: 0
      }
    }
  ])