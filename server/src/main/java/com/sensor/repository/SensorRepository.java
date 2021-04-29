package com.sensor.repository;

import com.sensor.Sensor;
import com.sensor.SensorType;

import java.util.ArrayList;
import java.util.List;

public class SensorRepository {

    private final List<Sensor> sensors = new ArrayList<>();

    public SensorRepository() {
        Sensor.Builder builder = Sensor.newBuilder();
        sensors.add(builder.setId("001").setName("Outdoor temperature").setType(SensorType.DIGITAL).build());
        sensors.add(builder.setId("002").setName("Indoor temperature").setType(SensorType.DIGITAL).build());
        sensors.add(builder.setId("003").setName("Room movement").setType(SensorType.PULSE).build());
        sensors.add(builder.setId("004").setName("Humidity").setType(SensorType.PULSE).build());
        sensors.add(builder.setId("005").setName("Wind speed").setType(SensorType.DIGITAL).build());
    }

    public List<Sensor> getSensors() {
        return sensors;
    }
}
