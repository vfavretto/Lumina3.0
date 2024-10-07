const fs = require('fs');

const dadosEmpresas = fs.readFileSync('./Mongodb/table/empresas.json');
const empresas = JSON.parse(dadosEmpresas);


const dadosServicos = fs.readFileSync('./Mongodb/table/servicos.json');
const servicos = JSON.parse(dadosServicos);

const dadosAdmin = fs.readFileSync('./Mongodb/table/admin.json');
const admin = JSON.parse(dadosAdmin);


use('lumina')
db.empresas.insertMany([empresas]);
db.empresas.createIndex({CNPJ: 1}, {unique: true, name:'cnpj_erro_empresas'});
db.empresas.createIndex({ local: "2dsphere" });
db.servicos.insertMany([servicos]);
db.servicos.createIndex({idServ: 1}, {unique: true, name:'idServ_erro_servicos'});
db.admin.insertMany([admin]);
db.admin.createIndex({idAdmin: 1});
