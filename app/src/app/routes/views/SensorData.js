import React, {Component} from 'react';
import {Card} from 'antd';
import {getData} from "../../../service/SensorsService";

class SensorData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        getData(this.props.sensorId, (data) => {
            this.setState({
                sensorData: data
            });
        });
    }

    render() {
        return <div>
            <div className="site-card-border-less-wrapper">
                <Card title="Data" bordered={false} style={{width: "50%"}}>
                    <div style={{margin: "15px"}}>
                        {
                            this.state.sensorData ?
                                <div>
                                    <div>Value: {this.state.sensorData.value}</div>
                                    <div>Timestamp: {this.state.sensorData.timestamp}</div>
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