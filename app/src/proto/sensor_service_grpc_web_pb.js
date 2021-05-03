/**
 * @fileoverview gRPC-Web generated client stub for com.sensor
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.com = {};
proto.com.sensor = require('./sensor_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.sensor.SensorServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.sensor.SensorServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.com.sensor.Sensor>}
 */
const methodDescriptor_SensorService_getAll = new grpc.web.MethodDescriptor(
  '/com.sensor.SensorService/getAll',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.com.sensor.Sensor,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.sensor.Sensor.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.com.sensor.Sensor>}
 */
const methodInfo_SensorService_getAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.sensor.Sensor,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.sensor.Sensor.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.sensor.Sensor>}
 *     The XHR Node Readable Stream
 */
proto.com.sensor.SensorServiceClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.sensor.SensorService/getAll',
      request,
      metadata || {},
      methodDescriptor_SensorService_getAll);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.sensor.Sensor>}
 *     The XHR Node Readable Stream
 */
proto.com.sensor.SensorServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.sensor.SensorService/getAll',
      request,
      metadata || {},
      methodDescriptor_SensorService_getAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.com.sensor.SensorData>}
 */
const methodDescriptor_SensorService_getData = new grpc.web.MethodDescriptor(
  '/com.sensor.SensorService/getData',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_wrappers_pb.StringValue,
  proto.com.sensor.SensorData,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.sensor.SensorData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.com.sensor.SensorData>}
 */
const methodInfo_SensorService_getData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.sensor.SensorData,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.sensor.SensorData.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.sensor.SensorData>}
 *     The XHR Node Readable Stream
 */
proto.com.sensor.SensorServiceClient.prototype.getData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.sensor.SensorService/getData',
      request,
      metadata || {},
      methodDescriptor_SensorService_getData);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.com.sensor.SensorData>}
 *     The XHR Node Readable Stream
 */
proto.com.sensor.SensorServicePromiseClient.prototype.getData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/com.sensor.SensorService/getData',
      request,
      metadata || {},
      methodDescriptor_SensorService_getData);
};


module.exports = proto.com.sensor;

