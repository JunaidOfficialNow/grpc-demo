const { join } = require('path');
const PROTO_PATH = join(__dirname, '..', 'hero.proto')

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  logn: String,
  enum: String,
  arrays: true
})

const heroesProto = grpc.loadPackageDefinition(packageDefinition).hero;

const server = new grpc.Server();


server.addService(heroesProto.HeroesService.service, {
  findOne: (call, callback) => {
    callback(null, { id: 1, name: 'junai' });
  }
})

server.bindAsync('0.0.0.0:4000', grpc.ServerCredentials.createInsecure(), () => server.start())