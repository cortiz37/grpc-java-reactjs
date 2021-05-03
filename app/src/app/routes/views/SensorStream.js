import React, {Component} from 'react';
import {Card, Progress} from 'antd';
import {streamData} from "../../../service/SensorsService";

class SensorStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            end: false,
            interval: 2
        }
    }

    componentDidMount() {
        streamData(
            this.props.sensorId,
            this.state.interval,
            (data) => {
                this.setState({
                    sensorData: data
                });
            },
            () => {
                this.setState({
                    sensorData: undefined,
                    end: true
                });
            }
        );
    }

    render() {
        return <div>
            <div className="site-card-border-less-wrapper">
                <Card title={"Monitor (update interval: " + this.state.interval + "s)"} bordered={false} style={{width: "50%"}}>
                    <div style={{margin: "15px"}}>
                        {
                            this.state.sensorData ?
                                <div>
                                    <Progress type="circle" percent={this.state.sensorData.value}/>

                                    <h3 style={{marginTop: "20px"}}>
                                        Date: {new Date(this.state.sensorData.timestamp).toLocaleTimeString("en-US")}
                                    </h3>
                                </div>
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