package com.sensor;

import com.sensor.repository.SensorRepository;
import com.sensor.service.SensorServiceImpl;
import io.grpc.Server;
import io.grpc.ServerBuilder;
import io.grpc.protobuf.services.ProtoReflectionService;

import java.io.IOException;

public class App {

    private static final int PORT = 8085;

    public static void main(String[] args) throws IOException, InterruptedException {
        Server server = ServerBuilder.forPort(PORT)
            .addService(new SensorServiceImpl(new SensorRepository()))
            .addService(ProtoReflectionService.newInstance())
            .build()
            .start();

        System.out.println("Server listening on port: " + PORT);

        server.awaitTermination();
    }
}
