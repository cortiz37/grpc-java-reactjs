package com.sensor.repository;

import com.sensor.Sensor;
import com.sensor.SensorData;
import com.sensor.SensorType;

import java.util.*;

public class SensorRepository {

    private final List<Sensor> sensors = new ArrayList<>();
    private final Set<String> sensorIds = new HashSet<>();

    public SensorRepository() {
        Sensor.Builder builder = Sensor.newBuilder();
        sensors.add(builder.setId("001").setName("Outdoor temperature").setType(SensorType.DIGITAL).build());
        sensors.add(builder.setId("002").setName("Indoor temperature").setType(SensorType.DIGITAL).build());
        sensors.add(builder.setId("003").setName("Room movement").setType(SensorType.PULSE).build());
        sensors.add(builder.setId("004").setName("Humidity").setType(SensorType.PULSE).build());
        sensors.add(builder.setId("005").setName("Wind speed").setType(SensorType.DIGITAL).build());

        sensorIds.addAll(Arrays.asList("001", "002", "003", "004", "005"));
    }

    public List<Sensor> getSensors() {
        return sensors;
    }

    public SensorData getSensorData(String sensorId) {
        Random random = new Random();
        return SensorData.newBuilder()
            .setValue(random.nextInt(101))
            .setTimestamp(System.currentTimeMillis())
            .build();
    }

    public boolean isSensorPresent(String sensorId) {
        return sensorIds.contains(sensorId);
    }
}
