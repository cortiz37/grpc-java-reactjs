import React, {Component} from 'react';
import {Card, Progress} from 'antd';
import {getCurrentData} from "../../../service/SensorsService";

class SensorData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        getCurrentData(this.props.sensorId, (data) => {
            this.setState({
                sensorData: data
            });
        });
    }

    render() {
        return <div>
            <div className="site-card-border-less-wrapper">
                <Card title="Current data" bordered={false} style={{width: "50%"}}>
                    <div style={{margin: "15px"}}>
                        {
                            this.state.sensorData ?
                                <div>
                                    <Progress type="circle" percent={this.state.sensorData.value}/>

                                    <h3 style={{ marginTop: "20px" }}>
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

export default SensorData;