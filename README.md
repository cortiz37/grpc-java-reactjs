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

--------

#### Monitoring
 
Streams send data to active clients:

`docker-compose logs -f server`

```
server_1  |  -> sending value '68' [grpc-default-executor-0]
server_1  |  -> sending value '19' [grpc-default-executor-0]
server_1  |  -> sending value '24' [grpc-default-executor-0]
server_1  |  -> sending value '70' [grpc-default-executor-0]
server_1  |  -> sending value '97' [grpc-default-executor-0]
...
```

Logs will stop when exiting the streaming data UI or refreshing the page.

--------

#### Tools
 
##### protoc:

- (mac): 
    - `brew install protobuf`
    - `brew install protoc-gen-grpc-web`