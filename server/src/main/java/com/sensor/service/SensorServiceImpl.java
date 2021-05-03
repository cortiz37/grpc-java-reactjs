package com.sensor.service;

import com.google.protobuf.Empty;
import com.google.protobuf.StringValue;
import com.sensor.Sensor;
import com.sensor.SensorData;
import com.sensor.SensorServiceGrpc;
import com.sensor.repository.SensorRepository;
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
}