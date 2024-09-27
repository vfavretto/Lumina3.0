use('lumina')
db.empresas.aggregate([
    {
      $lookup: {
        from: "servicos",
        localField: "empresas",
        foreignField: "idServ",
        as: "servicosDetalhados"
      }
    },
    {
      $project: {
        nomeEmpresa: 1,
        tipoEmpresa: 1,
        "servicosDetalhados.servicos.idServ": 1,
        _id: 0
      }
    }
  ])