package com.sensor.service;

import com.google.protobuf.Empty;
import com.google.protobuf.StringValue;
import com.sensor.Sensor;
import com.sensor.SensorData;
import com.sensor.SensorRead;
import com.sensor.SensorServiceGrpc;
import com.sensor.repository.SensorRepository;
import io.grpc.Context;
import io.grpc.stub.StreamObserver;

public class SensorServiceImpl extends SensorServiceGrpc.SensorServiceImplBase {

    private final SensorRepository sensorRepository;

    public SensorServiceImpl(SensorRepository sensorRepository) {
        this.sensorRepository = sensorRepository;
    }

    @Override
    public void getAll(Empty request, StreamObserver<Sensor> responseObserver) {
        sensorRepository.getSensors().forEach(responseObserver::onNext);
        responseObserver.onCompleted();
    }

    @Override
    public void getData(StringValue request, StreamObserver<SensorData> responseObserver) {
        if (sensorRepository.isSensorPresent(request.getValue())) {
            SensorData sensorData = sensorRepository.getSensorData(request.getValue());
            responseObserver.onNext(sensorData);
        }
        responseObserver.onCompleted();
    }

    @Override
    public void streamData(SensorRead request, StreamObserver<SensorData> responseObserver) {
        if (sensorRepository.isSensorPresent(request.getId())) {
            Context.CancellableContext withCancellation = Context.current().withCancellation();
            try {
                withCancellation.run(() -> {
                    Context current = Context.current();
                    while (!current.isCancelled()) {
                        SensorData sensorData = sensorRepository.getSensorData(request.getId());
                        responseObserver.onNext(sensorData);
                        try {
                            System.out.println(" --> sending value");
                            Thread.sleep(request.getInterval());
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                });
            } finally {
                withCancellation.cancel(null);
            }
        }
        responseObserver.onCompleted();
    }
}