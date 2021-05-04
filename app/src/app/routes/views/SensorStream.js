import React, {Component} from 'react';
import {Card, Col, List, Progress, Row} from 'antd';
import {streamData} from "../../../service/SensorsService";

class SensorStream extends Component {
    history = [];

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            end: false,
            interval: 2
        }
    }

    componentDidMount() {
        const stream = streamData(
            this.props.sensorId,
            this.state.interval,
            (data) => {
                this.setState({
                    sensorData: data
                });
                this.history.unshift(data);
                if (this.history.length > 5) {
                    this.history.pop();
                }
            },
            () => {
                this.setState({
                    sensorData: undefined,
                    end: true
                });
            }
        );

        this.cancelPreviousStreams(stream);
    }

    componentWillUnmount() {
        this.cancelPreviousStreams();
    }

    cancelPreviousStreams(newStream) {
        window.grpcCancellableStreams.forEach(stream => stream.cancel());
        window.grpcCancellableStreams = [];
        if(newStream) {
            window.grpcCancellableStreams.push(newStream);
        }
    }

    render() {
        let count = 1;

        return <div>
            <div className="site-card-border-less-wrapper">
                <Card title={"Monitor (update interval: " + this.state.interval + "s)"} bordered={false}
                      style={{width: "100%"}}>
                    <div style={{margin: "15px"}}>
                        {
                            this.state.sensorData ?
                                <Row gutter={[16, 16]}>
                                    <Col lg={8} md={24}>
                                        <Progress type="circle" percent={this.state.sensorData.value}/>

                                        <h3 style={{marginTop: "20px"}}>
                                            Date: {new Date(this.state.sensorData.timestamp).toLocaleTimeString("en-US")}
                                        </h3>
                                    </Col>
                                    <Col md={16} sm={24}>
                                        <List
                                            size="small"
                                            header="Local history (latest 5)"
                                            bordered
                                            dataSource={this.history}
                                            renderItem={item =>
                                                <List.Item>
                                                    <b># {count++}</b>
                                                    <b>{item.value} %</b>
                                                    <div style={{width: "200px"}}><Progress type="line"
                                                                                            percent={item.value}
                                                                                            showInfo={false}/></div>
                                                    <span>{new Date(item.timestamp).toLocaleTimeString("en-US")}</span>
                                                </List.Item>
                                            }
                                        />
                                    </Col>
                                </Row>
                                :
                                <div>No data</div>
                        }
                    </div>
                </Card>
            </div>
        </div>
    }
}

export default SensorStream;