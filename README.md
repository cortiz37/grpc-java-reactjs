## gRPC Java + Reactjs

### Build

#### Server

- `cd server`
- `./gradlew installDist` 

#### App

- `cd app`
- `npm install` 
- `npm run build` 

### Deploy

- `docker-compose up -d`

--------

 #### Making changes
 
To update the proto files:

Server: 
 
 - `src/main/proto/sensor_service.proto`
 - `gradle generateProto`
 - update the service implementation

Client:

 - copy the proto file into `src/app/proto/` directory
 - `protoc src/proto/sensor_service.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.`
 - update the client implementation
