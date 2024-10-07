use('lumina')
db.empresas.insertMany([
  {
    "idEmpresa": 2,
    "nomeEmpresa": "Empresa Verde S.A.",
    "telefoneEmpresa": "11987654321",
    "emailEmpresa": "contato@empresaverde.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "empresaverde.com",
    "tipoEmpresa": [
      "Fornecedor"
    ],
    "CNPJ": "01234567000189",
    "endereco": {
      "cidade": "São Paulo",
      "UF": "SP",
      "CEP": "01000000",
      "logradouro": "Av. Sustentabilidade",
      "numero": "100",
      "bairro": "Centro",
      "complemento": "Sala 505"
    },
    "redesSociais": {
      "facebook": "facebook.com/empresaverdesa",
      "instagram": "instagram.com/empresaverdesa",
      "linkedin": "linkedin.com/company/empresaverdesa"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 2,
        "idEmpresaRecebe": 1,
        "mensagem": "Gostaríamos de saber mais sobre seus serviços."
      }
    ],
    "servicos": [
      "1",
      "3"
    ],
    "auth": {
      "user": "empresaVerde",
      "password": "senhaSegura123"
    },
    "local": {
      "type": "Point",
      "coordinates": [-46.6611, -23.5783]
    }
  },
  {
    "idEmpresa": 3,
    "nomeEmpresa": "EcoSolutions Ltda.",
    "telefoneEmpresa": "21965432198",
    "emailEmpresa": "eco@solutions.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "ecosolutions.com.br",
    "tipoEmpresa": [
      "Contratante"
    ],
    "CNPJ": "98765432000122",
    "endereco": {
      "cidade": "Rio de Janeiro",
      "UF": "RJ",
      "CEP": "20200000",
      "logradouro": "Rua Verde",
      "numero": "75",
      "bairro": "Botafogo",
      "complemento": "Bloco B"
    },
    "redesSociais": {
      "facebook": "facebook.com/ecosolutions",
      "instagram": "instagram.com/ecosolutions",
      "linkedin": "linkedin.com/company/ecosolutions"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 1,
        "idEmpresaRecebe": 2,
        "mensagem": "Interessado em parceria para projeto sustentável."
      }
    ],
    "servicos": [
      "2",
      "5"
    ],
    "auth": {
      "user": "ecoSolutions",
      "password": "ecosenha456"
    },
    "local": {
      "type": "Point",
      "coordinates": [-43.2218, -22.9627]
    }
  },
  {
    "idEmpresa": 4,
    "nomeEmpresa": "BioEnergia Global",
    "telefoneEmpresa": "31987654321",
    "emailEmpresa": "contato@bioenergia.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "bioenergia.com",
    "tipoEmpresa": [
      "Ambos"
    ],
    "CNPJ": "12345678000145",
    "endereco": {
      "cidade": "Belo Horizonte",
      "UF": "MG",
      "CEP": "30000000",
      "logradouro": "Av. Energia Renovável",
      "numero": "200",
      "bairro": "Centro",
      "complemento": ""
    },
    "redesSociais": {
      "facebook": "facebook.com/bioenergiaglobal",
      "instagram": "instagram.com/bioenergiaglobal",
      "linkedin": "linkedin.com/company/bioenergiaglobal"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 3,
        "idEmpresaRecebe": 1,
        "mensagem": "Precisamos de fornecedores para energia limpa."
      }
    ],
    "servicos": [
      "1",
      "4"
    ],
    "auth": {
      "user": "bioEnergia",
      "password": "bioenergy123"
    },
    "local": {
      "type": "Point",
      "coordinates": [-43.9946, -19.8474]
    }
  },
  {
    "idEmpresa": 5,
    "nomeEmpresa": "Soluções Sustentáveis Ltda.",
    "telefoneEmpresa": "11987651234",
    "emailEmpresa": "sustentaveis@solucoes.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "solucoessustentaveis.com.br",
    "tipoEmpresa": [
      "Fornecedor"
    ],
    "CNPJ": "56789012000178",
    "endereco": {
      "cidade": "São Paulo",
      "UF": "SP",
      "CEP": "03000000",
      "logradouro": "Rua do Meio Ambiente",
      "numero": "80",
      "bairro": "Jardins",
      "complemento": ""
    },
    "redesSociais": {
      "facebook": "facebook.com/solucoessustentaveis",
      "instagram": "instagram.com/solucoessustentaveis",
      "linkedin": "linkedin.com/company/solucoessustentaveis"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 2,
        "idEmpresaRecebe": 4,
        "mensagem": "Precisamos de uma proposta para soluções ambientais."
      }
    ],
    "servicos": [
      "1",
      "6"
    ],
    "auth": {
      "user": "solucoesSustentaveis",
      "password": "senhaSustentavel789"
    },
    "local": {
      "type": "Point",
      "coordinates": [-46.6290, -23.5691]
    }
  },
  {
    "idEmpresa": 6,
    "nomeEmpresa": "Reciclagem Inteligente S.A.",
    "telefoneEmpresa": "21912345678",
    "emailEmpresa": "recicla@inteligente.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "reciclageminteligente.com.br",
    "tipoEmpresa": [
      "Ambos"
    ],
    "CNPJ": "23456789000123",
    "endereco": {
      "cidade": "Rio de Janeiro",
      "UF": "RJ",
      "CEP": "22000000",
      "logradouro": "Rua Reciclagem",
      "numero": "90",
      "bairro": "Copacabana",
      "complemento": ""
    },
    "redesSociais": {
      "facebook": "facebook.com/reciclageminteligente",
      "instagram": "instagram.com/reciclageminteligente",
      "linkedin": "linkedin.com/company/reciclageminteligente"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 1,
        "idEmpresaRecebe": 5,
        "mensagem": "Gostaríamos de uma proposta para coleta de resíduos."
      }
    ],
    "servicos": [
      "2",
      "4"
    ],
    "auth": {
      "user": "reciclagemInteligente",
      "password": "reciclaSenha101"
    },
    "local": {
      "type": "Point",
      "coordinates": [-43.4702, -22.9129]
    }
  },
  {
    "idEmpresa": 7,
    "nomeEmpresa": "Energia Renovável Brasil Ltda.",
    "telefoneEmpresa": "31998765432",
    "emailEmpresa": "contato@renovavelbrasil.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "renovavelbrasil.com",
    "tipoEmpresa": [
      "Contratante"
    ],
    "CNPJ": "34567891000167",
    "endereco": {
      "cidade": "Belo Horizonte",
      "UF": "MG",
      "CEP": "31000000",
      "logradouro": "Rua Renovável",
      "numero": "150",
      "bairro": "Savassi",
      "complemento": ""
    },
    "redesSociais": {
      "facebook": "facebook.com/renovavelbrasil",
      "instagram": "instagram.com/renovavelbrasil",
      "linkedin": "linkedin.com/company/renovavelbrasil"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 3,
        "idEmpresaRecebe": 6,
        "mensagem": "Precisamos de soluções em energia solar."
      }
    ],
    "servicos": [
      "1",
      "3"
    ],
    "auth": {
      "user": "energiaRenovavel",
      "password": "senhaRenovavel321"
    },
    "local": {
      "type": "Point",
      "coordinates": [-43.8947, -19.8492]
    }
  },
  {
    "idEmpresa": 8,
    "nomeEmpresa": "Consultoria Verde S.A.",
    "telefoneEmpresa": "21987654321",
    "emailEmpresa": "contato@consultoriaverde.com",
    "userImg": "http://image.com/image.png",
    "siteEmpresa": "consultoriaverde.com",
    "tipoEmpresa": [
      "Ambos"
    ],
    "CNPJ": "45678912000134",
    "endereco": {
      "cidade": "São Paulo",
      "UF": "SP",
      "CEP": "04000000",
      "logradouro": "Av. Verde",
      "numero": "125",
      "bairro": "Ibirapuera",
      "complemento": "Sala 402"
    },
    "redesSociais": {
      "facebook": "facebook.com/consultoriaverde",
      "instagram": "instagram.com/consultoriaverde",
      "linkedin": "linkedin.com/company/consultoriaverde"
    },
    "mensagens": [
      {
        "idMsg": 1,
        "idEmpresaEnvia": 5,
        "idEmpresaRecebe": 7,
        "mensagem": "Gostaríamos de uma consultoria para sustentabilidade."
      }
    ],
    "servicos": [
      "2",
      "6"
    ],
    "auth": {
      "user": "consultoriaVerde",
      "password": "verdeConsultoria123"
    },
    "local": {
      "type": "Point",
      "coordinates": [-46.7162, -23.6918]
    }
  }
])
