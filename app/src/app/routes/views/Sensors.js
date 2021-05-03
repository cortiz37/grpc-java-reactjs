import React, {Component} from 'react';
import {Button, Card, Col, Empty, Row} from 'antd';
import {getAll} from "../../../service/SensorsService";
import {MonitorOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

class Sensors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            sensors: []
        }
    }

    componentDidMount() {
        getAll((data) => {
            this.setState({
                sensors: data
            });
        });
    }

    render() {
        const sensors = [];
        if (this.state.sensors) {
            this.state.sensors.forEach((sensor, index) => {
                sensors.push(
                    <Col key={sensor.getId()} lg={6} md={12} sm={24}>
                        <Card key={sensor.getId()} title={sensor.getName()}>
                            <Link key={sensor.getId()} to={"/data/" + sensor.getId()}>
                                <Button key={sensor.getId()} block type="primary" className="big-button">
                                    <MonitorOutlined/>
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                )
            });
        }

        return <div>
            {
                this.state.sensors && this.state.sensors.length > 0 ?
                    <Row gutter={[16, 16]}>{sensors}</Row> : <Empty/>
            }
        </div>
    }
}

export default Sensors;