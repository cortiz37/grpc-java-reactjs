import {API_BASE_URL} from '../constants/index';
import {SensorServiceClient} from "../proto/sensor_service_grpc_web_pb";
import {Empty} from "google-protobuf/google/protobuf/empty_pb.js";
import {StringValue} from "google-protobuf/google/protobuf/wrappers_pb";

const client = new SensorServiceClient(API_BASE_URL);

export function getAll(callback) {
    const all = client.getAll(new Empty(), {});
    const sensors = [];
    all.on('data', function (response) {
        sensors.push(response);
    });
    all.on('end', function () {
        callback(sensors);
    });
}

export function getData(id, callback) {
    const request = new StringValue();
    request.setValue(id);
    const data = client.getData(request, {});
    data.on('data', function (response) {
        callback(response.toObject());
    });
}